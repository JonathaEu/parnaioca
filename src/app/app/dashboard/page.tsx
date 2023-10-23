'use client'
import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useStateContext } from '@/context/AuthProvider';
import BuscarCliente from "@/functions/get-clientes";
import { Table } from 'react-bootstrap';
import Dashboard from '../../../../public/assets/dashboard.png';
import getMaisRentavel from "@/functions/getMaisRentavel";
import getPorcentagem from "@/functions/getPorcentagem";
import getItensMaisSaidas from "@/functions/getItensMaisSaidas";
import GraficoQuartoMaisRentaveis from "../components/GraficoQuartoMaisRentaveis";
import GraficoItensMaiorSaida from "../components/GraficoItensMaiorSaida";
import GraficoReceita from '../components/GraficoReceita';
import postReceita from "@/functions/postReceita";
import postReceitaAnoAtual from "@/functions/postReceitaAnoAtual";
import getClienteHospedado from "@/functions/getClienteHospedado";
import { format } from "date-fns";

type Clientes = {
  id: number;
  quarto: string;
  nome: string;
  data_inicio: string;
  data_fim: string;
}

const dados = [
  {
    id: 1,
    quarto: "Suíte Parnaioca",
    nome: "Victor",
    data_inicio: "10/10/2023",
    data_fim: "12/10/2023",
  },

  {
    id: 2,
    quarto: "Apartamento 10",
    nome: "Lucas",
    data_inicio: "10/10/2023",
    data_fim: "12/10/2023",
  },

  {
    id: 3,
    quarto: "Suíte Mendes Lopes",
    nome: "Ludmilla",
    data_inicio: "10/10/2023",
    data_fim: "12/10/2023",
  },
]

export default function dashboard() {

  const { user } = useStateContext();
  const [maisRentavel, setMaisRentavel] = useState([]);
  const [porcentagem, setPorcentagem] = useState([]);
  const [porcentagemItem, setPorcentagemItem] = useState([]);
  const [clientesHospedados, setClientesHospedados] = useState<any[]>([]);
  const [itensMaiorSaida, setItensMaiorSaida] = useState([]);
  const [anoOptions, setAnoOptions] = useState([]);
  const [ano, setAno] = useState({});
  const [dadosRenda, setDadosRenda] = useState([]);

  let piorQuarto = maisRentavel[maisRentavel.length - 1];
  let piorPorcentagem = porcentagem[porcentagem.length - 1];
  const RouteClientes = () => { router.push('app/cliente/cadastro') };

  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let menos5Anos = anoAtual - 5;
  const arrayParaOptionAnos: any = [];

  function ControlaRangeDatasMenores() {
    while (menos5Anos < anoAtual) {
      menos5Anos++
      arrayParaOptionAnos.push(menos5Anos);
    }
    setAnoOptions(arrayParaOptionAnos);
  }

  function controlaGraficoRendaAno() {
    postReceita({ ano })
      .then((response: any) => {
        console.log(response)
        setDadosRenda(response.relatorio)
      })
  }

  useEffect(() => {
    getPorcentagem().then((response: any) => {
      setPorcentagem(response.porcentagens)
    });

    getMaisRentavel().then((response: any) => {
      setMaisRentavel(response.quartoMaisFrequente)
    });

    getItensMaisSaidas().then((response: any) => {
      setItensMaiorSaida(response.ItemMaisFrequente)
      setPorcentagemItem(response.porcentagens)
      console.log(response);
    });

    getClienteHospedado()
      .then((response: any) => {
        setClientesHospedados(response.cliente);
      })

    ControlaRangeDatasMenores();

    postReceitaAnoAtual()
      .then((response: any) => {
        setDadosRenda(response.relatorio)
      })
  }, []);

  return (
    <>
      <SideBarFuncionario>
        <div className="bg-gray-300 h-full w-screen">
          <div className="flex justify-center items-center bg-black p-2 text-white">
            <h2 className="text-sm">Bem-vindo <b>{user?.name}</b>, o que deseja fazer?</h2>
          </div>


          <div className="flex items-center text-cente justify-center w-full h-auto">
            <img src={Dashboard.src} alt="dashboard" className="w-96 p-4" />
          </div>

          <hr className="h-[100]" />
          <div className="grid mr-20 ml-20 drop-shadow-md lg:grid-cols-3 p-3 relative content-between overflow-hidden bg-cover bg-no-repeat">
            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center p-2">
                <td className="text-2x1 font-bold">Quarto mais rentável:</td>

                <td className="text-xs animate-bounce hover:font-semibold">{maisRentavel[0]}</td>
              </div>

              <p className='bg-green-200 text-green-700 flex justify-center items-center p-2 rounded-lg animate-pulse'>
                {porcentagem[0]}%
              </p>

            </div>

            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center">
                <td className="text-2x1 font-bold">Item com maior saída:</td>
                <td className="text-xs animate-bounce hover:font-semibold">
                  {itensMaiorSaida[0]}
                </td>
              </div>

              <p className='bg-green-200 text-green-700 flex justify-center items-center p-2 rounded-lg animate-pulse'>
                {porcentagemItem[0]}%
              </p>
            </div>
            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center">
                <td className="text-2x1 font-bold">Quarto menos utilizado:</td>
                <td className="text-xs animate-bounce hover:font-semibold">{piorQuarto}</td>
              </div>
              <p className='bg-red-200 flex text-red-700 justify-center items-center p-2 rounded-lg animate-pulse'>
                {piorPorcentagem}%
              </p>
            </div>
          </div>

          <div className="flex">
            <div
              className="
    w-[60%] md:col-span-2
    relative lg-h[70vh]
    h-[60%] ml-16 p-3
    border rounded-lg shadow-lg
    bg-[#FFFFFF] transition duration-300
    ease-in-out hover:scale-10
    hover:drop-shadow-xl
          ">
              <div className="flex justify-evenly items-center ">
                <div className="w-72">
                  <div className="flex items-center justify-center">
                    <span className="uppercase text-xs font-semibold">
                      Quartos mais rentáveis
                    </span>
                  </div>
                  <GraficoQuartoMaisRentaveis porcentagem={porcentagem} quarto={maisRentavel} />
                </div>
                <br />
                <div className="w-72">
                  <div className="items-center flex justify-center">
                    <span className="uppercase text-xs font-semibold">
                      Itens com maior saída
                    </span>
                  </div>
                  <GraficoItensMaiorSaida itemMaiorSaidaValores={porcentagemItem} itemMaiorSaidaNome={itensMaiorSaida} />
                </div>
              </div>
            </div>
            <div
              className="
          relative w-[40%] lg-h[70vh]
          p-3 pl-2 border rounded-lg shadow-lg
          bg-[#FFFFFF]
          transition duration-300
           ease-in-out hover:scale-10
            hover:drop-shadow-xl mr-3 ml-2
           ">
              <div className="items-center flex justify-center">
                <span className="uppercase text-xs font-semibold">
                  RECEITA MENSAL
                </span>

                <select
                  defaultValue={anoAtual}
                  onChange={(e) => {
                    setAno(e.target.value)
                  }}>

                  {anoOptions.map((anos: any, index: any) => {
                    return <option key={index}>{anos}</option>
                  })}
                </select>

                <button onClick={() => { console.log(dadosRenda), controlaGraficoRendaAno() }}>FILTRAR</button>
              </div>
              <GraficoReceita dadosParaGrafico={dadosRenda} />
            </div>
          </div>

          <br />
          <hr />
          <br />
          <div>
            <h2 className="flex uppercase justify-center items-center font-semibold text-2xl text-slate-950">
              Relatório de Hospedagem
            </h2>
          </div>
          <br />
          <div className="
          border rounded-lg shadow-lg
          bg-[#ffffff] transition duration-300
          ease-in-out hover:scale-10 
          hover:drop-shadow-xl flex items-center
          text-center p-5 w-[90%] mr-20 ml-20 
          ">
            <Table>
              <thead className="table-auto uppercase">
                <tr className="bottom-20">
                  <th className="w-screen">Quartos</th>
                  <th className="w-screen">Hóspedes</th>
                  <th className="w-screen">Check-in</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {clientesHospedados.map((clientes: any) => {
                  return (
                    <tr key={clientes.id} className="bottom-20">
                      <td>{clientes.nome_quarto}</td>
                      <td>{clientes.nome_cliente}</td>
                      <td>{format(new Date(clientes.check_in), 'dd/MM/yyyy HH/mm/ss')}</td>
                      <hr className="h-[100]" />
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <br />
          <hr className="h-[100]" />

        </div>
      </SideBarFuncionario >
    </>
  )

};
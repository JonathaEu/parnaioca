'use client'
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useStateContext } from '@/context/AuthProvider';
import BuscarCliente from "@/functions/get-clientes";
import { Table } from 'react-bootstrap';
import Dashboard from '../../../../public/assets/dashboard.png';

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

    const [clientes, setClientes] = useState<any[]>([]);
    const RouteClientes = () => { router.push('app/cliente/cadastro') };

    useEffect(() => {
        setClientes(dados);
        BuscarCliente().then((sucess) => {
            // setClientes(sucess);
        })
            .catch((err) => {
                console.log(err)
            })
    }, []);



  return (
    <>
      <SideBarFuncionario>
        <div className="bg-gray-100 h-full w-screen">

          <div className="flex justify-center items-center bg-black p-2 text-white">
            <h2 className="text-sm">Bem-vindo <b>{user?.name}</b>, o que deseja fazer?</h2>
          </div>


          <div className="flex items-center text-cente justify-center w-full h-auto">
            <img src={Dashboard.src} alt="dashboard" className="w-96 p-4"/>
          </div>
          <hr className="h-[100]" />
          <div className="grid drop-shadow-md lg:grid-cols-3 p-14 relative content-between overflow-hidden bg-cover bg-no-repeat">
            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center p-2">
                <td className="text-2x1 font-bold">Quarto mais rentável:</td>
                <td className="text-xs animate-bounce hover:font-semibold">Suíte Parnaioca</td>
              </div>
              <p className='bg-green-200 text-green-700 flex justify-center items-center p-2 rounded-lg animate-pulse'>+19%</p>
            </div>

            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center">
                <td className="text-2x1 font-bold">Item com maior saída:</td>
                <td className="text-xs animate-bounce hover:font-semibold">Coca-cola</td>
              </div>
              <p className='bg-green-200 text-green-700 flex justify-center items-center p-2 rounded-lg animate-pulse'>+40%</p>
            </div>
            <div className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl p-2 col-span-1 bg-white flex w-80 border rounded-lg">
              <div className="flex flex-col w-full items-center">
                <td className="text-2x1 font-bold">Quarto menos utilizado:</td>
                <td className="text-xs animate-bounce hover:font-semibold">Apartamento 10</td>
              </div>
              <p className='bg-red-200 flex text-red-700 justify-center items-center p-2 rounded-lg animate-pulse'>-20%</p>
            </div>
          </div>
          <hr />
          <br />
          <hr />
          <br />
          <div>
            <h2 className="flex justify-center items-center font-semibold text-2xl text-slate-950">
              Relatório de Hospedagem
            </h2>
          </div>
          <br />
          <div className="flex items-center text-center p-5 bg-slate-400 w-90 mr-20 ml-20 border shadow-lg rounded">
            <Table>
              <thead className="table-auto">
                <tr className="bottom-20">
                  <th className="w-screen">Quarto</th>
                  <th className="w-screen">Hóspede</th>
                  <th className="w-screen">Check-in</th>
                  <th className="w-screen">Check-out</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {clientes.map((clientes) => {
                  return (
                    <tr key={clientes.id} className="bottom-20">
                      <td>{clientes.quarto}</td>
                      <td>{clientes.nome}</td>
                      <td>{clientes.data_inicio}</td>
                      <td>{clientes.data_fim}</td>
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

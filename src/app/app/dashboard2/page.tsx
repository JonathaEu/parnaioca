'use client'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '@/services/api'
import SideBarFuncionario from '../components/SideBarFuncionario'
import { useStateContext } from '@/context/AuthProvider'
import axios from 'axios';
import { error } from "console";


type Clientes = {
  id: number;
  quarto: string;
  nome: string;
  data_inicio: string;
  data_fim: string;
}

export default function dashboard2() {
  const { user } = useStateContext();

  const [clientes, setClientes] = useState([]);

  // useEffect(() => {
  //   const getClientes = async () => {
  //     try{
  //       const apiClientes = await api.get('/cliente');
  //       setClientes(Response.data);
  //     } catch (error){
  //     console.error("erro ao buscar clientes:", error);
  //     }    
  // };
  //   getClientes();
  // }, []);



  return (
    <>
      <SideBarFuncionario>
        <div className="bg-gray-100 h-screen w-screen">

          <div className="flex justify-center items-center bg-black p-2 text-white">
            <h2 className="text-sm">Bem-vindo <b>{user?.name}</b>, o que deseja fazer?</h2>
          </div>

          <div className="flex items-center text-center mr-[58] ">
            <h1 className="ml-4 p-8 w-full font-bold text-[28px]">DASHBOARD</h1>
          </div>
          <hr className="h-[100]" />
          <div className="grid drop-shadow-md lg:grid-cols-3 p-4 relative content-between overflow-hidden bg-cover bg-no-repeat">
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
          <div className="">
            <h2 className="flex justify-center items-center font-semibold text-2xl text-slate-950">
              Relatório de Hospedagem
            </h2>
          </div>
          <br />
          <div className="">
            <table className="">
              <tbody>
                <tr className="bottom-20">
                  <th className="w-screen">Quarto</th>
                  <th className="w-screen">Hóspede</th>
                  <th className="w-screen">Check-in</th>
                  <th className="w-screen">Check-out</th>
                </tr>
                <tr className="text-center bottom-10">
                  <td>Apartamento 08</td>
                  <td>Larissa Souza</td>
                  <td>10/08/2023</td>
                  <td>20/08/2023</td>
                </tr>
              </tbody>
            </table>
          </div>


          {clientes.map((cliente) => (
            <li key={cliente.id} className="bg-white p-4 shadow-md rounded-md mb-4">
              <p className="text-lg font-semibold">Nome: {cliente.nome}</p>
              <p className="text-sm text-gray-600">Quarto: {cliente.quarto}</p>
              <p className="text-sm text-gray-600">Data de Início: {cliente.data_inicio}</p>
              <p className="text-sm text-gray-600">Data de Fim: {cliente.data_fim}</p>
            </li>
          ))}



        </div>
      </SideBarFuncionario >
    </>
  )
};

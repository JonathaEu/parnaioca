"use client"
import React from 'react'
import cadastraCliente from '@/functions/postClientes'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
import SideBarFuncionario from '../../components/SideBarFuncionario'
import api from '@/services/api'
import RegisterClientesModal from '@/app/modals/registerCliente'
import BuscarCliente from '@/functions/get-clientes'
import getQuartos from '@/functions/getQuartos'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import excluir from '../../../../../public/assets/excluir.png'
import editar from '../../../../../public/assets/editar.png'
import avatar from '../../../../../public/assets/avatar-modal-cliente.png'
import cadastro from '../../../../../public/assets/cadastro-de-clientes.png'
import BuscarClienteEspecifico from '@/functions/get-clientes-specify';


export default function CadastroClientes() {

    const [cliente, setCliente] = useState([]);
    const [quarto, setQuarto] = useState([]);

    const Fteste = (data: any) => {
        BuscarClienteEspecifico(data)
            .then((sucess: any) => {
                setCliente(sucess.data);
                console.log(sucess.data[0]);
            }).catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        BuscarCliente().then((sucess: any) => {
            setCliente(sucess.data);
            console.log(sucess);
            console.log(sucess);
        }).catch((err) => { console.log(err) });
    }, []);
    // useEffect(() => {
    //     getQuartos().then((sucess: any) => {
    //         setQuarto(sucess.data);
    //         console.log(sucess);
    //     }).catch((err) => { console.log(err) });
    // }, []);

    return (
        <>
            <SideBarFuncionario>


                <div className="w-full h-screen bg-[#DCDCDC]">
                    <header className="">
                        <div className="bg-white p-4 m-0 flex shadow-lg w-full h-auto">
                            <div className="flex items-center justify-center w-full">
                                <img src={cadastro.src} alt="cadastro" className="w-44" />
                            </div>
                        </div>
                    </header>

                    <section className="flex flex-wrap content-between ">
                        <div className='w-full px-10 '>
                            <RegisterClientesModal />
                            <table className="w-[80%] ml-[10%]  pl-14 text-sm  text-white dark:text-gray-400">
                                <thead
                                    className="
                                text-xs uppercase
                                bg-gray-50 dark:bg-gray-700
                                text-white w-full">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Cliente:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Está no quarto:
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Situação:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {cliente && cliente.map((clientes: any, index: any) => {
                                        // let status = cliente.ativo ? "Ativo" : "Inativo";
                                        // const classNameGreen = "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                        // const classNameRed = "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                                        // let statusStyle = cliente.ativo ? classNameGreen : classNameRed;

                                        return (
                                            <>
                                                <tr key={index} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                    <td className='py-4 px-6 indent-[20%]'>
                                                        {clientes.nome}
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        {clientes?.quarto?.nome}
                                                    </td>
                                                    <td className={`indent-[35%] `}>
                                                        {/* <div className={` w-full rounded-md h-full mr-2 px-2.5 py-0.5 ${statusStyle}`}>
                                                        {status}
                                                    </div> */}
                                                    </td>
                                                    <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>

                                                        <Button
                                                            onClick={() => { Fteste(clientes.id) }}
                                                        ><img src={editar.src} alt="editar" className="w-9" /></Button>
                                                        <button><img src={excluir.src} alt="excluir" className="w-8" /></button>
                                                    </td>

                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </SideBarFuncionario>
        </>
    )
}
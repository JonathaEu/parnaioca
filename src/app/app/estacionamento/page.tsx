"use client"
import React from 'react'
import cadastraCliente from '@/functions/postClientes'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Sidebar from '@/app/app/components/Sidebar'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraEstacionamento from '@/functions/RegisterEstacionamento'
import RegisterEstacionamentoModal from '@/app/modals/RegisterParking'


export default function Itens() {
    const [quarto, setQuarto] = useState([]);

    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/estacionamento_quarto');
            setQuarto(response.data);
            // console.log(response.data.data);
            console.log(response);
        };
        getQuarto();
    }, []);
    return (
        <>
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">
                        <RegisterEstacionamentoModal></RegisterEstacionamentoModal>
                        <div className='w-full px-10'>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Esta Vaga Pertence ao Quarto:
                                        </th>

                                        <th scope="col" className="px-4 py-3">
                                        </th>

                                        <th scope="col" className="px-4 py-3">
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>


                                <tbody className=''>
                                    {quarto.map((quarto) => {
                                        // let status = frigobar.ativo ? "Ativo" : "Inativo";
                                        // const classNameGreen = "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                        // const classNameRed = "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                                        // let statusStyle = frigobar.ativo ? classNameGreen : classNameRed;

                                        return (
                                            <>
                                                <tr key={quarto.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                    <td className='py-4 px-6 indent-[20%]'>
                                                        {quarto?.quarto?.nome}
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                    </td>
                                                    <td className={`indent-[35%] `}>
                                                        <div className={` w-full rounded-md h-full mr-2 px-2.5 py-0.5`}>
                                                        </div>
                                                    </td>
                                                    <td className='flex justify-end gap-10 mt-2 mb-2 pb-0.5 mr-3'>
                                                        <button className='bg-purple-100 text-purple-800 text-sm font-medium mr-2 rounded dark:bg-purple-900 dark:text-purple-300 p-2'>editar</button>
                                                        <button className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400'>excluir</button>
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
            </Sidebar>
        </>
    )
}

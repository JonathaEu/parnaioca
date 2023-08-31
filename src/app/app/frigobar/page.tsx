"use client"
import React from 'react'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraFrigobar from '@/functions/PostFrigobar/idex'
import FormElements from '@/app/modals/RegisterFrigobar'
import SideBarFuncionario from '../components/SideBarFuncionario'


export default function Frigobar() {
    const [frigobar, setFrigobar] = useState([]);

    useEffect(() => {
        const getFrigobar = async () => {
            const response = await api.get('/frigobar_quarto');
            setFrigobar(response.data);
            console.log(response);
        };
        getFrigobar();
    }, []);
    // console.log(frigobar);

    return (
        <>
            <SideBarFuncionario>
                <div className="bg-[#f3f3f3] bg-cover h-screen w-full">
                    <div className="flex flex-col content-center items-center h-[75%] w-[80%] backdrop-blur-sm bg-white/30 rounded-x shadow-lg bg-[#adbac2] shadow-slate-300 mx-auto p-4
      mt-20 px-10">

                        <FormElements />
                        <section>
                            <div>
                                <table className="rounded-lg">
                                    <thead className="text-xs uppercase dark:bg-[#2a2c45] dark:text-white">
                                        <tr className="">
                                            <th scope="col" className="px-16 p-2">
                                                Número do Frigobar:
                                            </th>
                                            <th scope="col" className="px-20 p-2">
                                                Quarto:
                                            </th>
                                            <th scope="col" className="px-20 p-2">
                                                Situação:
                                            </th>
                                            <th scope="col" className="px-2 p-2">
                                            </th>
                                        </tr>
                                    </thead>


                                    <tbody className=''>
                                        {frigobar.map((frigobar) => {
                                            let status = frigobar.ativo ? "Ativo" : "Inativo";
                                            const classNameGreen = "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                            const classNameRed = "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                                            let statusStyle = frigobar.ativo ? classNameGreen : classNameRed;

                                            return (
                                                <>
                                                    <tr key={frigobar.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                        <td className='py-4 px-6 indent-[20%]'>
                                                            {frigobar.numero}
                                                        </td>
                                                        <td className='py-4 px-6'>
                                                            {frigobar?.quarto?.nome}
                                                        </td>
                                                        <td className={`indent-[35%] `}>
                                                            <div className={` w-full rounded-md h-full mr-2 px-2.5 py-0.5 ${statusStyle}`}>
                                                                {status}
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
                </div>
            </SideBarFuncionario>
        </>
    )
}

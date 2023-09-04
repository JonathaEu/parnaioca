"use client"
import React from 'react'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Sidebar from '@/app/app/components/Sidebar'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import FormElements from '@/app/modals/RegisterFrigobar'
import EditFrigobarModal from '@/app/modals/editFrigobar'

type Inputs = {
    itens_id: number
    numero: number
    ativo: number
    frigobar_id: number
}

export default function Frigobar() {
    const [frigobar, setFrigobar] = useState([]);
    const getFrigobar = async () => {
        const response = await api.get('/frigobar_quarto');
        setFrigobar(response.data);
        console.log(response);
    };

    useEffect(() => {
        getFrigobar();
    }, []);

    // console.log(frigobar);

    return (
        <>
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">
                        <FormElements getFrigobar={getFrigobar} />
                        <div className='w-full px-10'>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Frigobar número:
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
                                    {frigobar.map((frigobar: any, index) => {
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
                                                    <td className={``}>
                                                        <div className={`w-full rounded-md  mr-2 text-center px-2.5 py-0.5 ${statusStyle}`}>
                                                            {status}
                                                        </div>
                                                    </td>
                                                    <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>
                                                        <EditFrigobarModal key={frigobar.id} index={index} frigobar={frigobar} id={frigobar.id} getFrigobar={getFrigobar} />
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
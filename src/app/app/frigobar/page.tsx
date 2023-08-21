"use client"
import React from 'react'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Sidebar from '@/app/app/components/Sidebar'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraFrigobar from '@/functions/PostFrigobar/idex'
import FormElements from '@/app/modals/RegisterFrigobar'


export default function Frigobar() {
    const [frigobar, setFrigobar] = useState([]);

    useEffect(() => {
        const getFrigobar = async () => {
            const response = await api.get('/frigobar');
            setFrigobar(response.data.data);
            // console.log(response.data.data);
        };
        getFrigobar();
    }, []);
    return (
        <>
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">
                        <FormElements></FormElements>
                        <div className='w-full'>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Frigobar número:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Está no quarto:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Situação:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {frigobar.map((frigobar) => {
                                        // const [quarto, setQuarto] = useState([]);
                                        // useEffect(() => {
                                        //     const getQuarto = async () => {
                                        //         const response = await api.get(`/quarto${frigobar.quartos_id}`);
                                        //         setQuarto(response.data.data);
                                        //         // console.log(response.data.data);
                                        //     };
                                        //     getQuarto();
                                        // }, []);
                                        return (
                                            <>
                                                {/* <tr className=" relative bottom-20">
                                                    <th className="w-screen">Frigobares:</th>
                                                </tr> */}

                                                <tr key={frigobar.id} className='indent-10 bg-cyan-700 border-b dark:bg-gray-800 dark:text-white'>
                                                    <td className='py-4 px-6'>
                                                        {frigobar.numero}
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        {frigobar.quartos_id}
                                                    </td>
                                                    <td className='py-4 px-6 w-[200px]'>
                                                        {frigobar.ativo}
                                                    </td>
                                                    <td className='flex justify-end gap-10 mt-2 mr-3'>
                                                        <button className='bg-indigo-500 flex p-2 rounded-md'>Cadastrar</button>
                                                        <button className='bg-indigo-500 flex p-2 rounded-md'>editar</button>
                                                        <button className='bg-indigo-500 flex p-2 rounded-md'>excluir</button>
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

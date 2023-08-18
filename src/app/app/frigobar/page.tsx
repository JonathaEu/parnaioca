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
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Frigobares
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {frigobar.map((frigobar) => {

                                        return (
                                            <>
                                                {/* <tr className=" relative bottom-20">
                                                    <th className="w-screen">Frigobares:</th>
                                                </tr> */}

                                                <tr key={frigobar.id} className='bg-cyan-700 border-b dark:bg-gray-800'>
                                                    <td className='py-4 px-6'>
                                                        {frigobar.id}
                                                        <div className='flex flex-col3'>
                                                            <button className='bg-indigo-500 flex  indent-32'>Cadastrar</button>
                                                            <button className='bg-indigo-500 flex  indent-36'>editar</button>
                                                            <button className='bg-indigo-500 flex  indent-48'>excluir</button>
                                                        </div>
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

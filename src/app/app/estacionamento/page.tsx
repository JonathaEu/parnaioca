"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegisterEstacionamentoModal from '@/app/modals/RegisterParking'
import SideBarFuncionario from '../components/SideBarFuncionario';
import estacionamentoHeader from '../../../../public/assets/EstacionamentoHeader.png';
import excluir from '../../../../public/assets/excluir.png';
import editar from '../../../../public/assets/editar.png';


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
            <SideBarFuncionario>
                <div className="w-full bg-[#d0d0d0] h-screen">
                    <header>
                        <div className='bg-white p-1 m-0 flex items-center justify-center shadow-lg w-full h-auto'>
                            <img
                                src={estacionamentoHeader.src}
                                alt="estacionamento"
                                className="w-44 m-3"
                            />
                        </div>
                    </header>


                    <div className="w-full">
                        <section className="flex flex-wrap content-between ">
                            <RegisterEstacionamentoModal />
                            <div className='w-full ml-[4%] px-10'>
                                <table
                                    className="
                                w-full text-sm 
                                text-left text-white
                                ">
                                    <thead
                                        className="
                                    text-xs text-white
                                    uppercase dark:bg-gray-700
                                    w-full
                                    ">
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
                                                        <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>
                                                            <button><img src={editar.src} alt="editar" className="w-9" /></button>
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
                </div>
            </SideBarFuncionario>
        </>
    )
}

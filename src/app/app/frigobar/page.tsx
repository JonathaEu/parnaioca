"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import FormElements from '@/app/modals/RegisterFrigobar'
import EditFrigobarModal from '@/app/modals/editFrigobar'
import ItensIntoFrigobar from '@/app/modals/ItensIntoFrigobar'
import headerFrigobar from '../../../../public/assets/frigobar.png'
import SideBarFuncionario from '../components/SideBarFuncionario'
import excluir from '../../../../public/assets/excluir.png'
import getQuartos from '@/functions/getQuartos';

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

    const [itens, setItens] = useState([]);
    const getItem = async () => {
        const response = await api.get('/itens');
        setItens(response.data);
        console.log(response);
    };

    const [quarto, setQuarto] = useState([]);

    useEffect(() => {
        getFrigobar();
        getItem();
        getQuartos()
            .then((sucess: any) => {
                console.log(sucess);
                setQuarto(sucess.data)
            }).catch((err) => {
                console.log(err)
            });
        // console.log(response.data.data);
    }, []);

    // console.log(frigobar);

    return (
        <>

            <SideBarFuncionario>

                <div className="w-full bg-[#DCDCDC]">
                    <header className="flex justify-between">
                        <div className="bg-white p-4 m-0 flex shadow-lg w-full h-auto">
                            <img src={headerFrigobar.src} alt="cadastro" className="w-24" />
                        </div>
                    </header>
                    <div className="w-full">
                        <section className="flex flex-wrap content-between ">
                            <FormElements getFrigobar={getFrigobar} />
                            <div className='w-full px-10'>
                                <table className="w-full text-sm text-left text-white">
                                    <thead className="text-xs text-white uppercase  bg-[#374151] w-full">
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
                                            const classNameGreen = "bg-green-100 animate-pulse text-green-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                            const classNameRed = "bg-red-100 animate-pulse text-red-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
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
                                                            <ItensIntoFrigobar key={frigobar.id} itens2={itens} index={index} frigobar={frigobar} id={frigobar.id} />
                                                            <EditFrigobarModal key={frigobar?.id} frigobar={frigobar} id={frigobar?.id} quarto={quarto} />

                                                            <button>
                                                                <img src={excluir.src} alt="excluir" className="w-8" />
                                                            </button>
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
'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import RegisterQuartoModal from '../../modals/registerQuarto';
import RegisterQuartoCategory from '@/app/modals/registerQuartoCategory';
import cadastrarQuarto from '../../../../public/assets/cadastrar-quartos.png';
import getQuartos from '@/functions/getQuartos';


export default function Quarto() {
    const [quarto, setQuarto] = useState([]);
    const [tipoQuarto, setTipoQuarto] = useState([]);

    const getTipoQuarto = async () => {
        const response = await api.get('/tipo_quarto');
        setTipoQuarto(response.data.data);
        console.log(response.data.data);
    }
    useEffect(() => {
        getQuartos()
            .then((response: any) => {
                setQuarto(response.data);
            });

        getTipoQuarto();

    }, []);

    return (
        <SideBarFuncionario>
            <div className="w-full h-screen bg-[#DCDCDC]">
                <header className="flex justify-between">
                    <div className="bg-white p-4 m-0 flex shadow-lg w-full h-auto items-center justify-center">
                        <img src={cadastrarQuarto.src} alt="cadastro" className="w-52" />
                    </div>
                </header>


                <div className="w-[100%]">
                    <div className="mt-10 ml-10 mb-6
                        ">
                        <RegisterQuartoCategory getTipoQuarto={getTipoQuarto} />
                        <RegisterQuartoModal tipoQuarto={tipoQuarto} setQuarto={setQuarto} />
                    </div>

                    <section className="flex flex-wrap content-between justify-center">
                        <table className="w-[80%] text-sm text-left text-white">
                            <thead className="text-xs text-white uppercase  bg-[#374151] w-full">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nome do quarto:
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Valor:
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Status:
                                    </th>

                                </tr>
                            </thead>


                            <tbody className=''>
                                {quarto.map((quarto: any, index) => {
                                    let status = quarto.ativo ? "Ativo" : "Inativo";
                                    const classNameGreen = "bg-green-100 animate-pulse text-green-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                    const classNameRed = "bg-red-100 animate-pulse text-red-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                                    let statusStyle = quarto.ativo ? classNameGreen : classNameRed;

                                    return (
                                        <>
                                            <tr key={quarto.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                <td className='py-4 px-6 indent-[20%]'>
                                                    {quarto?.numero}
                                                </td>
                                                <td className='py-4 px-6'>
                                                    {quarto?.nome}
                                                </td>
                                                <td className='py-4 px-6'>
                                                </td>
                                                {/* <td className={``}>
                                                    <div className={`w-full rounded-md  mr-2 text-center px-2.5 py-0.5 ${statusStyle}`}>
                                                        {status}
                                                    </div>
                                                </td> */}
                                                {/* <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>
                                            <ItensIntoquarto key={frigobar.id} getItem={getItem} itens2={itens} index={index} frigobar={frigobar} id={frigobar.id} />
                                            <EditFrigobarModal key={frigobar.id} index={index} frigobar={frigobar} id={frigobar.id} getFrigobar={getFrigobar} />
                                            <button>
                                                <img src={excluir.src} alt="excluir" className="w-8" />
                                            </button>
                                        </td> */}

                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </SideBarFuncionario>
    )
}

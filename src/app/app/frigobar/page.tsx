"use client"
import React from 'react'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Sidebar from '@/app/app/components/Sidebar'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import FormElements from '@/app/modals/RegisterFrigobar'
import { useRouter } from 'next/navigation'
import Modal from 'react-modal';
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar/index'

type Inputs = {
    itens_id: number
    numero: number
    ativo: number
    frigobar_id: number

}

export default function Frigobar() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        RegistraFrigobar({ data })
            .then((response) => {
                console.log(response)
                window.alert('sucesso')
            }).catch((err) => {
                console.log(err)
                console.error(err)
                window.alert(err);
            });
        // reset();
    }
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0 ,0, 0.8)'
        },
        content: {
            border: '1px solid green',
            background: '#839cff',
            borderRadius: '20px',
            padding: '20px',
            // height: '100%'
        }
    };
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(frigobar: any, index: any) {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [frigobar, setFrigobar] = useState([]);
    const [frigIndex, setFrigIndex] = useState([]);

    useEffect(() => {
        const getFrigobar = async () => {
            const response = await api.get('/frigobar_quarto');
            setFrigobar(response.data);
            console.log(response);
        };
        getFrigobar();
    }, []);
    const [itens, setItens] = useState([]);
    useEffect(() => {
        const getItens = async () => {
            const response = await api.get('/itens');
            setItens(response.data.data);
            // console.log(response.data.data);
        };
        getItens();
    }, []);

    // console.log(frigobar);

    return (
        <>
            <Sidebar>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cadastrar Itens para o Frigobar</h3>
                            <form onSubmit={handleSubmit(onSubmit)}
                            >

                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center"
                                    />
                                </div>

                                <div className='text-center'>
                                    <label>Quais itens deseja adicionar ao frigobar?</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("itens_id")}>
                                            {itens.map((itens) => {

                                                return (
                                                    <>
                                                        <option value={itens.id}>{itens?.nome}</option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca] left-[130px] mt-10
                                '/>

                                </div>
                            </form>
                            <button className='absolute top-[10%] right-[10%] text-lg text-red-600' onClick={closeModal}>X</button>
                        </div>
                    </Modal>
                </div>

                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">
                        <FormElements></FormElements>
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
                                    {frigobar.map((frigobar, index) => {
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
                                                        <button onClick={openModal} setFrigIndex={frigobar?.index} {...register("frigobar_id")} className='bg-purple-100 text-purple-800 text-sm font-medium mr-2 rounded dark:bg-purple-900 dark:text-purple-300 p-2 border border-purple-400'
                                                        >Adicionar Produtos</button>
                                                        <button className='bg-purple-100 text-purple-800 text-sm font-medium mr-2 rounded dark:bg-purple-900 dark:text-purple-300 p-2 border border-purple-400'>editar</button>
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
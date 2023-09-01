"use client"
import React from 'react'
import cadastraCliente from '@/functions/postClientes'
import Cadastro from '../../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../../public/assets/logo.png'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
import SideBarFuncionario from '../../components/SideBarFuncionario'
import api from '@/services/api'
import Modal from 'react-modal';
import RegisterClientesModal from '@/app/modals/registerCliente'
import BuscarCliente from '@/functions/get-clientes'
import { useForm, SubmitHandler } from "react-hook-form"
import getQuartos from '@/functions/getQuartos'



type Inputs = {
    nome: string
    email: string
    cpf: string
    nascimento: Date
    telefone: string
    cidade: string
    estado: string
}
export default function CadastroClientes() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraCliente({ data })
            .then((response) => {
                reset();

            }).catch((err) => {
                window.alert(err)
            });
    };

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0 ,0, 0.3)',
            backdropFilter: 'blur(4px)',
        },
        content: {
            background: '#75726F',
            borderRadius: '20px',
            padding: '20px',
            // height: '100%'
        }
    };
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [cliente, setCliente] = useState([]);
    const [quarto, setQuarto] = useState([]);

    useEffect(() => {
        if (modalIsOpen == false) {
            BuscarCliente().then((sucess: any) => {
                setCliente(sucess.data);
                console.log(sucess);
            }).catch((err) => { console.log(err) });
        }
    }, [modalIsOpen]);

    useEffect(() => {
        BuscarCliente().then((sucess: any) => {
            setCliente(sucess.data);
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

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                >

                    <div className="space-y-6 w-full">

                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cadastrar Cliente</h3>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div>
                                <button className='absolute right-[2%] top-[2%]  text-black' onClick={closeModal}>X</button>
                                <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center" />
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                            Nome
                                        </label>
                                        <input defaultValue='' placeholder='Digite o nome completo' id="nome" {...register('nome', { required: true })} className='border 
                     text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-medium'>
                                            Email
                                        </label>
                                        <input defaultValue='' id="email" placeholder="Digite o email" {...register('email')} className='border
                         text-gray-900 text-sm border-slate-950 rounded-md block p-2 w-80 hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="cpf" className='block mb-2 text-sm font-medium'>
                                            CPF
                                        </label>
                                        <input defaultValue='' placeholder="Digite o CPF" id="cpf" {...register('cpf')} className='border 
                         text-gray-900 text-sm border-slate-950 rounded-md block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>
                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="nascimento" className='block mb-2 text-sm font-medium'>
                                            Data de Nascimento
                                        </label>
                                        <input type="date" defaultValue='' id="nascimento" {...register('nascimento')} className='border 
                     text-gray-900 border-slate-950 text-sm rounded-md block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="telefone" className='block mb-2 text-sm font-medium'>
                                            Telefone
                                        </label>
                                        <input defaultValue='' id="telefone" placeholder="Digite o telefone" {...register('telefone')} className='border 
                        text-gray-900 border-slate-950 text-sm  rounded-md block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                            Cidade
                                        </label>
                                        <input defaultValue='' id="cidade" placeholder="Digite a cidade" {...register('cidade')} className='border 
                    text-gray-900 border-slate-950 text-sm rounded-md block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>
                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="estado" className='block mb-2 text-sm font-medium'>
                                            Estado
                                        </label>
                                        <input defaultValue='' id="estado" placeholder="Digite o estado" {...register('estado')} className='border 
                    text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center p-2'>

                                <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca]' />

                            </div>
                        </form>
                    </div>
                </Modal>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">
                        <div className='w-full px-10'>
                            <button onClick={openModal} className='bg-purple-100 mt-10 mb-6 text-white text-sm font-medium mr-2 rounded-sm dark:bg-orange-600 dark:text-white p-2 '
                            >Cadastrar Clientes</button>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
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
                                    {cliente.map((cliente: any) => {
                                        // let status = cliente.ativo ? "Ativo" : "Inativo";
                                        // const classNameGreen = "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                                        // const classNameRed = "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                                        // let statusStyle = cliente.ativo ? classNameGreen : classNameRed;

                                        return (
                                            <>
                                                <tr key={cliente.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                    <td className='py-4 px-6 indent-[20%]'>
                                                        {cliente.nome}
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        {cliente?.quarto?.nome}
                                                    </td>
                                                    <td className={`indent-[35%] `}>
                                                        {/* <div className={` w-full rounded-md h-full mr-2 px-2.5 py-0.5 ${statusStyle}`}>
                                                        {status}
                                                    </div> */}
                                                    </td>
                                                    <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>

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
            </SideBarFuncionario>
        </>
    )
}
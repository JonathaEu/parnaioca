"use client"
import React from 'react'
import cadastraCliente from '@/functions/postClientes'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
import SideBarFuncionario from '../../components/SideBarFuncionario'
import api from '@/services/api'
import Modal from 'react-modal';
import RegisterClientesModal from '@/app/modals/registerCliente'
import BuscarCliente from '@/functions/get-clientes'
import { useForm, SubmitHandler } from "react-hook-form"
import getQuartos from '@/functions/getQuartos'
import excluir from '../../../../../public/assets/excluir.png'
import editar from '../../../../../public/assets/editar.png'
import avatar from '../../../../../public/assets/avatar-modal-cliente.png'
import cadastro from '../../../../../public/assets/cadastro-de-clientes.png'
import InputMask from 'react-input-mask';



type Inputs = {
    nome: string
    email: string
    cpf: string
    nascimento: Date
    telefone: string
    cidade: string
    estado: string
    genero: string
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        content: {
            background: '#6e737d',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '80%',
            maxHeight: '96%',
        },
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
                    className={`w-[60%] p-2`}
                >

                    <div className="mb-3">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="flex justify-center items-center w-full bg-[#374151]">
                                <img src={avatar.src} alt="cadastro" className="w-64" />
                            </div>
                            <br />
                            <div>
                                <button className='absolute right-[2%] top-[2%]  text-black' onClick={closeModal}>x</button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                            Nome
                                        </label>
                                        <input
                                            defaultValue=''
                                            placeholder='Digite o nome completo'
                                            id="nome"
                                            {...register('nome', { required: true })}
                                            className='border text-gray-900
                                        text-sm rounded-md border-slate-950
                                        block w-80 p-2 hover:border-slate-800'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="email"
                                            className='block mb-2 text-sm font-medium'>
                                            Email
                                        </label>
                                        <input
                                            defaultValue=''
                                            id="email"
                                            placeholder="exemplo@exemplo.com"
                                            {...register('email')}
                                            className='border text-gray-500
                                          text-sm border-slate-950
                                          rounded-md block p-2 
                                          w-80 hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="cpf" className='block mb-2 text-sm font-medium'>
                                            CPF
                                        </label>
                                        <InputMask
                                            defaultValue=''
                                            placeholder="Digite o CPF"
                                            mask="999.999.999-99"
                                            id="cpf" {...register('cpf')}
                                            className='border text-gray-900 
                                        text-sm border-slate-950
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="nascimento" className='block mb-2 text-sm font-medium'>
                                            Data de Nascimento
                                        </label>
                                        <input
                                            type="date"
                                            defaultValue=''
                                            id="nascimento"
                                            {...register('nascimento')}
                                            className='border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-4">
                                        <label htmlFor="genero" className="block mb-2 text-sm font-medium">
                                            Gênero
                                        </label>
                                        <select
                                            id="genero"
                                            name="genero"
                                            {...register('genero')}
                                            className="
                                            border text-gray-900
                                            text-sm border-slate-950
                                            rounded-md block p-2 w-80
                                            hover:border-slate-800"
                                        >
                                            <option value=" "></option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="nao-binario">Não Binário</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="telefone" className='block mb-2 text-sm font-medium'>
                                            Telefone
                                        </label>
                                        <InputMask
                                            mask="(99) 99999-9999"
                                            defaultValue=''
                                            id="telefone"
                                            placeholder="(00) 00000-0000"
                                            {...register('telefone')}
                                            className='
                                        border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                            Cidade
                                        </label>
                                        <input defaultValue=''
                                            id="cidade"
                                            placeholder="Digite a cidade"
                                            {...register('cidade')}
                                            className='border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-4 pl-10'>
                                    <div className='mb-4'>
                                        <label htmlFor="estado" className='block mb-2 text-sm font-medium'>
                                            Estado
                                        </label>
                                        <input
                                            defaultValue=''
                                            id="estado"
                                            placeholder="Digite o estado"
                                            {...register('estado')}
                                            className='
                                        border text-gray-900
                                        text-sm rounded-md
                                        border-slate-950 block
                                        w-80 p-2 hover:border-slate-800'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center p-2'>

                                <div className="rounded-lg">

                                    <input type='submit'
                                        className='
                                        mb-6 bg-[#111827]
                                        text-gray-200 hover:bg-[#374151]
                                        hover:text-gray-300 shadow-black
                                         rounded-md cursor-pointer
                                        transition-transform transform 
                                        active:scale-95 py-2 px-4
                                        active:bg-[#000000] uppercase' />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>

                <div className="w-full h-screen bg-[#DCDCDC]">

                    <header className="flex justify-between">
                        <div className="bg-white p-4 m-0 flex shadow-lg w-full h-auto">
                            <img src={cadastro.src} alt="cadastro" className="w-44" />
                        </div>
                    </header>

                    <section className="flex flex-wrap content-between ">
                        <div className='w-full px-10'>
                            <button
                                onClick={openModal}
                                className='
                                    mb-6 mt-10 bg-[#111827]
                                    text-gray-200 hover:bg-[#374151]
                                    hover:text-gray-300 shadow-black
                                     rounded-md cursor-pointer
                                    transition-transform transform 
                                    active:scale-95 py-2 px-4 p-2
                                    active:bg-[#000000] uppercase text-bold'
                            >
                                Cadastrar
                            </button>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead
                                    className="
                                text-xs uppercase
                                bg-gray-50 dark:bg-gray-700
                                text-white w-full">
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
            </SideBarFuncionario>
        </>
    )
}
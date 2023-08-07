"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import cadastraCliente from '@/functions/postClientes'
import Cadastro from '../../../../../public/assets/cadastro.png'


type Inputs = {
    nome: string
    email: string
    cpf: string
    nascimento: Date
    telefone: string
    cidade: string
    estado: string
}
export default function App() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraCliente({ data });
        // reset();
    }


    return (

        <div className="bg-[url('/assets/ilha.jpg')] bg-cover h-screen">
            <section className="flex flex-wrap content-between p-10">
                <form onSubmit={handleSubmit(onSubmit)} className='content-center items-center rounded backdrop-blur-sm bg-white/40 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4
    mt-1 px-5'>

                    <div>
                        <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                        <div className='space-y-4 pl-40'>
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

                        <div className='space-y-4 pl-40'>
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
                        <div className='space-y-4 pl-40'>
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
                        <input type='submit' className='p-1 bg-teal-600 shadow-lg border font-semibold tracking-wide transition ease-in-out duration-150 hover:bg-yellow-400 hover:shadow-xs hover:text-cyan-950 hover:no-underline hover:text-shadow text-sky-950  items-center flex right-16 rounded-md
               hover:cursor-pointer '/>
                    </div>
                </form>
            </section>
        </div>
    )
}
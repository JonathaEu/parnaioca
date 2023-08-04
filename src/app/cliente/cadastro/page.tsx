"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import cadastraCliente from '@/functions/postClientes'
import Cadastro from '../../../../public/assets/cadastro.png'

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
        <div className="bg-[url('../../../../public/assets/fundo-piscina.png)] bg-cover">
            
            <section className=" h-screen justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)}
                    className='max-w-3xl mx-auto p-4 bg-slate-300 shadow-md rounded-md'>
                    <div>
                        <img src={Cadastro.src} alt="logotipo" className="w-40 h-auto justify-center items-center" />
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                Nome
                            </label>
                            <input defaultValue='' id="nome" {...register('nome', { required: true })} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="email" className='block mb-2 text-sm font-medium'>
                                email
                            </label>
                            <input defaultValue='' id="email" {...register('email')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="cpf" className='block mb-2 text-sm font-medium'>
                                CPF
                            </label>
                            <input defaultValue='' id="cpf" {...register('cpf')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="nascimento" className='block mb-2 text-sm font-medium'>
                                Data de Nascimento
                            </label>
                            <input defaultValue='' id="nascimento" {...register('nascimento')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="telefone" className='block mb-2 text-sm font-medium'>
                                Telefone
                            </label>
                            <input defaultValue='' id="telefone" {...register('telefone')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                Cidade
                            </label>
                            <input defaultValue='' id="cidade" {...register('cidade')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="estado" className='block mb-2 text-sm font-medium'>
                                Estado
                            </label>
                            <input defaultValue='' id="estado" {...register('estado')} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className=''>
                        <input type='submit' className='p-2 flex right-16 bg-indigo-500 rounded-md
           hover:cursor-pointer '/>
                    </div>
                </form>
            </section>
        </div >
    )
}
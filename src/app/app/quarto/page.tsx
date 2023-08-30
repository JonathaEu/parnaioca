'use client'
import cadastraQuarto from '@/functions/postQuartos';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { RiSideBarFill } from 'react-icons/ri';
import SideBarFuncionario from '../components/SideBarFuncionario';
import Cama from '../../../..//public/assets/quarto.png'

type Inputs = {
    nome: string;
    numero: number;
    valor: number;
    max_cap: number;
    tipo_quartos_id: number;
}


export default function Quarto() {
    const {
        register,
        handleSubmit,
        // reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        cadastraQuarto({ data });
        console.log(data);
        // reset();
    }

    const [tipoQuarto, setTipoQuarto] = useState([]);

    useEffect(() => {
        const getTipoQuarto = async () => {
            const response = await api.get('/tipo_quarto');
            setTipoQuarto(response.data.data);
            console.log(response.data.data);
        };
        getTipoQuarto();
    }, []);

    return (
        <SideBarFuncionario>

            <div className="flex justify-center items-center w-screen h-screen bg-[url('/assets/fundo-piscina.png')] bg-cover">
                <form onSubmit={handleSubmit(onSubmit)}
                    className='bg-[#fafafa] text-black grid grid-cols-1 items-center rounded backdrop-blur-sm bg-black/40 w-3/3 rounded-x shadow-lg shadow-slate-200 mx-56 p-4 py-4
                        px-5'>
                    <div className="font-bold text-2xl items-center content-center flex w-full text-white">
                        <img src={Cama.src} alt="quarto" className="w-36" />
                        <h4 className="text-white font-bold text-[30px]">
                            Cadastro de Quartos
                        </h4>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                Nome
                            </label>
                            <input defaultValue='' id="nome" {...register('nome', { required: "Nome do quarto por favor" })} className='border border-gray-300
                         text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="numero" className='block mb-2 text-sm font-medium'>
                                Número
                            </label>
                            <input defaultValue='' id="numero" {...register('numero', { required: true })} className='border border-gray-300
                         text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="valor" className='block mb-2 text-sm font-medium'>
                                Valor
                            </label>
                            <input defaultValue='' id="valor" {...register('valor', { required: true })} className='border border-gray-300
                         text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="max_cap" className='block mb-2 text-sm font-medium'>
                                Capacidade Máxima
                            </label>
                            <input defaultValue='' id="max_cap" {...register('max_cap', { required: true })} className='border border-gray-300
                         text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div>
                    </div>


                <div className='flex gap-10 mb-8'>
                    <label>Categoria da acomodação</label>
                    <select {...register("tipo_quartos_id")}>
                        {tipoQuarto.map((item) => {


                                return (
                                    <>
                                        <option value={item.id} >{item?.tipo}</option>
                                    </>
                                );
                            })}
                        </select>
                    </div>
                    <div><input type='submit' className='p-2 flex justify-center items-center texcen bg-[#8BC53E] hover:bg-[#344321] rounded-full
                hover:cursor-pointer w-full '/>
                    </div>
                </form>
            </div>
        </SideBarFuncionario>
    )
}

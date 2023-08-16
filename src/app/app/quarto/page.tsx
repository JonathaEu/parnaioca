'use client'
import cadastraQuarto from '@/functions/postQuartos';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useEffect } from 'react';
import api from '@/services/api';

type Inputs = {
    nome: string;
    numero: number;
    valor: number;
    max_cap: number;
    quarto_id: number;
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
        <div className='mt-2'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='max-w-md mx-auto p-4 bg-slate-300 shadow-md rounded-md'>
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
                    <select {...register("quarto_id")}>
                        {tipoQuarto.map((item) => {

                            return (
                                <>
                                    <option value={item.id} >{item?.tipo}</option>
                                </>
                            );
                        })}
                    </select>
                </div>
                <div><input type='submit' className='p-2 flex justify-center items-center texcen bg-indigo-500 rounded-md
                hover:cursor-pointer w-full '/>
                </div>

            </form>
        </div>
    )
}

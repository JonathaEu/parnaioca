"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import cadastraCliente from '@/functions/postClientes'
import Cadastro from '../../../../public/assets/cadastro.png'
import LogoTipo from '../../../../public/assets/logo.png'
import Sidebar from '@/app/app/components/Sidebar'
import Footer from '@/app/app/components/Footer'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraEstacionamento from '@/functions/RegisterEstacionamento'

type Inputs = {
    quartos_id: number
}
export default function Itens() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        RegistraEstacionamento({ data })
            .then((response) => {
                window.alert('Estacionamento Relacionado com sucesso')
            }).catch((err) => {
                window.alert(err);
            });
        reset();
    }
    const [quarto, setQuarto] = useState([]);

    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/quarto');
            setQuarto(response.data.data);
            // console.log(response.data.data);
        };
        getQuarto();
    }, []);
    return (
        <>
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">

                        <form onSubmit={handleSubmit(onSubmit)} className='text-slate-200 grid grid-cols-1 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4 mt-14 px-5
                        '>

                            <div>
                                <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center"
                                />
                            </div>
                            <div className='text-center'>
                                <label>A Qual acomodação esta vaga pertence?</label>
                                <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                    <select {...register("quartos_id")}>
                                        {quarto.map((item) => {

                                            return (
                                                <>
                                                    <option value={item.id}>{item?.nome}</option>
                                                </>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca] left-[430px] mt-10
                                '/>

                            </div>
                        </form>
                    </section>
                </div>
            </Sidebar>
        </>
    )
}

'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraCliente from '@/functions/postClientes';
import ReservaModal from '../../../../public/assets/reservasModal.png'
import RegisterReserva from '@/functions/RegisterReserva';

type Inputs = {
    clientes_id: number;
    quartos_id: number;
    users_id: number;
    consumos_id: number;
    status: string;
    dt_inicial: Date;
    dt_final: Date;
    check_in: string;
    check_out: string;

}

function RegisterReservaModal({ quarto, clientes, funcionario }: any) {
    const funcionario_id = funcionario.id

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(funcionario_id)
        console.log(data)
        RegisterReserva({ data })
            .then((response) => {
                window.alert('Cadastrado com sucesso')
                reset();

            }).catch((err) => {
                console.log(err)
            });
        console.log(data);
        // console.log(data)
    }


    return (
        <>
            <div className='mt-16 mb-4'>
                <Button
                    className="
                    ml-[4%] right-0 mb-6 bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    p-2 rounded-md cursor-pointer
                    transition-transform transform 
                    active:scale-95 py-2 px-4
                    active:bg-[#000000] uppercase
                    "
                    onClick={() => props.setOpenModal('form-elements')}>
                    Registrar
                </Button>


                <div
                    className="
                flex items-center justify-center 
                w-full inset-0 z-50 bg-black
                 bg-opacity-50
                 ">
                    <Modal
                        className="flex items-center px-[25%] justify-center x-50 fixed self-center h-full backdrop-blur-sm"
                        show={props.openModal === 'form-elements'} popup
                        onClose={() => props.setOpenModal(undefined)}
                    >

                        <Modal.Header />
                        <Modal.Body>

                            <div className="">
                                <div className="w-full flex items-center justify-center">
                                    <img src={ReservaModal.src} alt="ReservaModal"
                                        className="w-60 invert"
                                    />
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}
                                    className='
                                text-slate-200 grid grid-cols-1 
                            content-center items-center rounded
                             backdrop-blur-sm bg-black/20 w-3/3
                             rounded-x shadow-lg shadow-slate-600
                             mx-auto p-4 py-4 mt-14 px-5'>

                                    <div>
                                        <div className='flex items-center justify-evenly'>
                                            <div>
                                                <label
                                                    className="flex items-center text-center
                                                    text-white">
                                                    Cliente
                                                </label>
                                                <div className='flex gap-10 mb-8 text-black mt-2'>
                                                    <select {...register("clientes_id",
                                                        { required: "Necessário selecionar cliente" })}>
                                                        <option value=""></option>
                                                        {clientes.map((clientes: any) => {
                                                            return (
                                                                <>
                                                                    <option value={clientes.id}>{clientes?.nome}</option>
                                                                </>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <label
                                                    className="
                                                        flex items-center
                                                        text-center text-white"
                                                >
                                                    Acomodações
                                                </label>
                                                <div className='flex gap-10 mb-8 text-black mt-2'>
                                                    <select {...register("quartos_id", { required: "Necessário selecionar quarto" })}>
                                                        <option value=""></option>
                                                        {quarto.map((quartos: any) => {

                                                            return (
                                                                <>
                                                                    <option value={quartos.id}>{quartos?.nome}</option>
                                                                </>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-evenly'>
                                            <div className='space-y-4'>
                                                <div className='mb-4'>
                                                    <label htmlFor="cidade"
                                                        className='
                                                block mb-2 text-sm 
                                                font-medium'
                                                    >
                                                        Check In
                                                    </label>
                                                    <input defaultValue=''
                                                        type="datetime-local"
                                                        id="CheckIn"
                                                        placeholder="Check In"
                                                        {...register('check_in')}
                                                        className='
                                                border text-gray-900 border-slate-950
                                                text-sm rounded-md block w-40 p-1
                                                hover:border-slate-800'
                                                    />
                                                </div>
                                            </div>

                                            <div className='space-y-4'>
                                                <div className='mb-4'>
                                                    <label htmlFor="estado"
                                                        className='
                                                block mb-2 text-sm 
                                                font-medium'
                                                    >
                                                        Nome do Funcionário
                                                    </label>

                                                    <input
                                                        placeholder={funcionario?.name}
                                                        {...register('users_id', { value: funcionario.id })}
                                                        className='
                                                border text-gray-900 text-sm
                                                rounded-md border-slate-950
                                                block w-40 p-1 hover:border-slate-800'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-evenly">
                                            <div className='space-y-4'>
                                                <div className='mb-4'>
                                                    <label
                                                        htmlFor="cidade"
                                                        className='
                                                block mb-2 text-sm
                                                font-medium
                                                '>
                                                        Data de Início
                                                    </label>
                                                    <input
                                                        defaultValue=''
                                                        type="date"
                                                        id="dt_inicial"
                                                        placeholder="Check In"
                                                        {...register('dt_inicial')}
                                                        className='
                                                    border text-gray-900
                                                border-slate-950 text-sm
                                                rounded-md block w-40
                                                p-1 hover:border-slate-800
                                                '/>
                                                </div>
                                            </div>

                                            <div className='space-y-4'>
                                                <div className='space-y-4'>
                                                    <div className='mb-4'>
                                                        <label htmlFor="estado"
                                                            className='
                                                        mb-2 text-sm
                                                        font-medium flex
                                                    '>
                                                            Data final
                                                        </label>
                                                        <input
                                                            defaultValue=''
                                                            type="date"
                                                            id="dt_final"
                                                            placeholder="Check Out"
                                                            {...register('dt_final')}
                                                            className='
                                                        border text-gray-900
                                                        border-slate-950 text-sm
                                                        rounded-md block w-40
                                                        p-1 hover:border-slate-800
                                                    '/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-center'>
                                            <div
                                                className='
                                        flex gap-10 mb-8
                                        text-black mt-10
                                        '>
                                                <label
                                                    htmlFor=""
                                                    className="
                                            text-white
                                            ">
                                                    Status da reserva:
                                                </label>
                                                <select {...register("status")}>
                                                    <option>Iniciado</option>
                                                    <option>Pendente</option>
                                                    <option>Finalizada</option>
                                                    <option>Cancelado</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div
                                            className='
                                    flex flex-col
                                    items-center p-2
                                    '>

                                            <input
                                                type='submit' className='
                                            ml-10 mb-2 bg-[#111827]
                                            text-gray-200 hover:bg-[#374151]
                                         hover:text-gray-300 shadow-black
                                         p-3 rounded-md cursor-pointer
                                         transition-transform transform 
                                         active:scale-95
                                         active:bg-[#000000] uppercase' />

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div >
            </div>
        </>

    )
}


export default RegisterReservaModal;
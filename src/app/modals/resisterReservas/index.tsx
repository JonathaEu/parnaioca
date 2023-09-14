'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraCliente from '@/functions/postClientes';
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

function RegisterReservaModal() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
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
    const [quarto, setQuarto] = useState([]);
    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/quarto');
            setQuarto(response.data.data);
            // console.log(response.data.data);
        };
        getQuarto();
    }, []);

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        const getClientes = async () => {
            const response = await api.get('/cliente');
            setClientes(response.data.data);
            console.log(response);
        };
        getClientes();
    }, []);

    const [funcionario, setFuncionario] = useState([]);
    useEffect(() => {
        const getFuncionario = async () => {
            const response = await api.get('/me');
            setFuncionario(response.data);
            console.log(response)
            console.log(funcionario)
        };
        getFuncionario();
    }, []);


    return (
        <>
            <div className='mt-32 mb-4'>
                <Button className="ml-10 p-2 bg-indigo-800" onClick={() => props.setOpenModal('form-elements')}>Registrar Reservas</Button>
                <Modal className='w-[800px] flex justify-center items-center ml-[12%]' show={props.openModal === 'form-elements'} popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 w-full">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registrar Reservas</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='text-slate-200 grid grid-cols-1 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4
    mt-14 px-5'>

                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center" />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                    <div className=''>
                                        <div className='flex gap-10 mb-8 text-black mt-10'>
                                            <select {...register("clientes_id", { required: "Necessário selecionar cliente" })}>
                                                <option value="">Selecione</option>
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
                                        <div className='flex gap-10 mb-8 text-black mt-10'>
                                            <select {...register("quartos_id", { required: "Necessário selecionar quarto" })}>
                                                <option value="">Selecione</option>
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

                                    <div className=''>
                                        <div className='mb-4'>
                                            <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                                Check In
                                            </label>
                                            <input defaultValue='' type="datetime-local" id="CheckIn" placeholder="Check In" {...register('check_in')} className='border 
                    text-gray-900 border-slate-950 text-sm rounded-md block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label htmlFor="estado" className='mb-2 text-sm font-medium flex content-center items-center'>
                                                Check Out
                                            </label>
                                            <input defaultValue='' type="datetime-local" id="CheckOut" placeholder="Check Out" {...register('check_out')} className='border 
                    text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label htmlFor="estado" className='mb-2 text-sm font-medium flex content-center items-center'>
                                                Nome do funcionario
                                            </label>

                                            <input defaultValue='' value={funcionario?.name} disabled placeholder={funcionario?.name} {...register('users_id')} className='border 
                        text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='mb-4'>
                                        <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                            Data de Início
                                        </label>
                                        <input defaultValue='' type="date" id="dt_inicial" placeholder="Check In" {...register('dt_inicial')} className='border 
                    text-gray-900 border-slate-950 text-sm rounded-md block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <div className='mb-4'>
                                        <label htmlFor="estado" className='mb-2 text-sm font-medium flex'>
                                            Data final
                                        </label>
                                        <input defaultValue='' type="date" id="dt_final" placeholder="Check Out" {...register('dt_final')} className='border 
                    text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='flex gap-10 mb-8 text-black mt-10'>
                                        <label htmlFor="" className="text-white">Status da reserva:</label>
                                        <select {...register("status")}>
                                            <option>Iniciada</option>
                                            <option>Pendente</option>
                                            <option>Finalizada</option>
                                            <option>Cancelado</option>
                                        </select>
                                    </div>
                                </div>


                                <div className='flex flex-col items-center p-2'>

                                    <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca]' />

                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>

    )
}


export default RegisterReservaModal;
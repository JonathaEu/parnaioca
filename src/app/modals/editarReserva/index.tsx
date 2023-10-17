'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler, Control, Controller } from "react-hook-form";
import Select from 'react-select';
import api from '@/services/api';
import EditItens from '@/functions/editItens';
import editar from '../../../../public/assets/editar.png'
import editarItem from '../../../../public/assets/editarItem.png'
import InputMask from 'react-input-mask'

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

export default function EditReservaModal({ quarto, clientes, funcionario, id }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [clitenHosted, setClientHosted] = useState<any>([]);
    const [quartoHosted, setQuartoHosted] = useState<any>([]);
    const [listaQuarto, setListaQuarto] = useState([]);
    const [listaClientes, setListaClientes] = useState([]);
    const {
        register,
        handleSubmit,
        control,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        // EditItens({ data })
        //     .then((response) => {
        //         // window.alert('Item cadastrado com sucesso')
        //     }).catch((err) => {
        //         console.log(err)
        //         console.error(err)
        //     });
        // setOpenModal(false as any)
        // reset();
    }
    let dataInicio: any;

    return (
        <>
            <div className=''>
                <Button className="w-[72px]" onClick={() => {
                    props.setOpenModal('edit_reserva'),
                        console.log(id);
                    api.get(`/reserva/${id}`)
                        .then((sucess: any) => {
                            console.log(sucess)
                            // console.log(sucess.data.data[0].clientes_id)
                            setQuartoHosted(() => {
                                const quartoClienteValue = [
                                    {
                                        value: sucess.data.data[0].quartos.id,
                                        label: sucess.data.data[0].quartos.nome,
                                    }
                                ]
                                return quartoClienteValue
                            });

                            setClientHosted(() => {
                                const clientHostedValue = [
                                    {
                                        value: sucess.data.data[0].clientes_id,
                                        label: sucess.data.data[0].nome
                                    }
                                ]
                                return clientHostedValue
                            });
                            setListaClientes(sucess?.data.clientes);
                            setListaQuarto(sucess?.data.quartos);
                            dataInicio = sucess.data.data[0].dt_inicial
                            console.log(dataInicio)
                        });
                }}>
                    <img src={editar.src} alt="editar" className="border-transparent" />
                </Button>

                <Modal show={props.openModal === 'edit_reserva'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div className="flex items-center hover:invert justify-center">
                                <img src={editarItem.src}
                                    alt="editar-item"
                                    className="w-44 invert"
                                />
                            </div>
                            <div>
                                <Button className="w-[72px]" onClick={() => {
                                    console.log(quartoHosted);
                                    console.log(dataInicio);
                                }}>reserva</Button>

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
                                                    <Controller
                                                        name='clientes_id'
                                                        control={control}
                                                        // defaultValue={teste && teste[0]}
                                                        // value={12}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, value, name, ref } }) => (
                                                            <Select
                                                                ref={ref}
                                                                defaultValue={clitenHosted[0]}
                                                                name={name}
                                                                options={listaClientes}
                                                                onChange={val => { onChange(val.value) }}
                                                            />
                                                        )}
                                                    />
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
                                                    <Controller
                                                        name='quartos_id'
                                                        control={control}
                                                        // defaultValue={teste && teste[0]}
                                                        // value={12}
                                                        rules={{ required: true }}
                                                        render={({ field: { onChange, value, name, ref } }) => (
                                                            <Select
                                                                ref={ref}
                                                                defaultValue={quartoHosted[0]}
                                                                name={name}
                                                                options={listaQuarto}
                                                                onChange={val => { onChange(val.value) }}
                                                            />
                                                        )}
                                                    />
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
                                                        defaultValue={funcionario.name}
                                                        disabled
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
                                                        defaultValue={dataInicio}
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
                                                    <option>Iniciada</option>
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


                        </div>
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



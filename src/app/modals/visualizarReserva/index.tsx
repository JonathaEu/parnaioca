
'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import api from '@/services/api';
import { compareAsc, format } from 'date-fns'
import EditItens from '@/functions/editItens';
import editar from '../../../../public/assets/editar.png'
import visualizar from '../../../../public/assets/visao.png'
import editarItem from '../../../../public/assets/editarItem.png'
import InputMask from 'react-input-mask'

type Inputs = {
    nome: string
    valor: string
    quantidade: number;
    id: number
}

export default function VisualizarReservaModal({ reserva }: any) {
    const quarto = reserva.quartos?.nome;
    const cliente = reserva.clientes.nome;
    const dt_inicial = reserva.dt_inicial;
    const dt_final = reserva.dt_final;
    const checkin = reserva.check_in;
    const status = reserva.status;
    const checkout = reserva.check_out;
    const funcionario = reserva.users.name;
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setOpenModal(false as any)
    }

    return (
        <>
            <div className=''>
                <Button className="w-[72px]" onClick={() => props.setOpenModal('form-elements')}>
                    <img src={visualizar.src} alt="editar" className="border-transparent" />
                </Button>
                <Modal show={props.openModal === 'form-elements'} size="xl"
                    className='sm:h-full backdrop-blur-sm py-36'
                    popup onClose={() => { props.setOpenModal(undefined), console.log(reserva) }}>
                    <Modal.Header className={'text-white'} />
                    <Modal.Body>
                        <div className="space-y-6 py-10">
                            <div className="flex items-center hover:invert justify-center">
                                <img src={editarItem.src}
                                    alt="editar-item"
                                    className="w-44 invert"
                                />
                            </div>
                            <div className='grid grid-cols-2 text-white text-md px-4'>
                                <div className='flex  justify-start gap-4 mt-4'>
                                    <label className=''>Cliente:</label>
                                    <h5>{cliente}</h5>
                                </div>

                                <div className='flex justify-around gap-4 mt-4'>
                                    <label className=''>Está no quarto:</label>
                                    <h5>{quarto}</h5>
                                </div>

                                <div className='flex   justify-start gap-4 mt-4'>
                                    <label className=''>Inicio:</label>
                                    <h5>{format(new Date(dt_inicial), 'dd/MM/yyyy')}</h5>
                                </div>

                                <div className='flex justify-around gap-4 mt-4'>
                                    <label className=''>Data Final:</label>
                                    <h5>{format(new Date(dt_final), 'dd/MM/yyyy')}</h5>
                                </div>

                                <div className='flex   justify-start gap-4 mt-4'>
                                    <label className=''>Check in:</label>
                                    <h5>{format(new Date(checkin), 'dd/MM/yyyy')}</h5>
                                </div>

                                <div className='flex justify-around gap-4 mt-4'>
                                    <label className=''>Check out:</label>
                                    <h5>{checkout ? format(new Date(checkin), 'dd/MM/yyyy') : 'Pendente'}</h5>
                                </div>

                                <div className='flex   justify-start gap-4 mt-4'>
                                    <label className=''>Cadastrado por:</label>
                                    <h5>{funcionario}</h5>
                                </div>

                                <div className='flex justify-around gap-4 mt-4'>
                                    <label className=''>Status:</label>
                                    <h5>{status}</h5>
                                </div>


                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



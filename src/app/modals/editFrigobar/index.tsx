'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import drinkFrigobar from '../../../../public/assets/drink-frigobar.png'
import fundoModal from '../../../../public/assets/fundo-modal-frigobar.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import editFrigobar from '@/functions/EditFrigobar';
import editar from '../../../../public/assets/editar.png'
import getFrigobar from '@/functions/getFrigobar';
import getQuartos from '@/functions/getQuartos';

type Inputs = {
    id: number
    quartos_id: number
    numero: number
    ativo: number
    status: string
}

export default function EditFrigobarModal({ frigobar, id, quarto }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        if (data != '') {
            console.log(data);
            editFrigobar({ data })
                .then((response) => {
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                    console.error(err)
                });
            getFrigobar();
            setOpenModal(false as any)
            reset();
        }
    }
    useEffect(() => {

    }, [quarto])


    return (
        <>
            <div className=''>
                <Button className="border-none" onClick={() => props.setOpenModal('edit')}>
                    <img src={editar.src} alt="editar" className="w-9" />
                </Button>
                <Modal show={props.openModal === 'edit'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white"></h3>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='text-gray-800 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4 mt-14 px-5  dark:text-white
                        '>

                                <div>
                                    <img
                                        src={Cadastro.src}
                                        alt="cadastro"
                                        className="w-1/5 h-full items-center"
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label htmlFor="numero" className='block mb-2 text-sm font-medium'>
                                                {frigobar.id}
                                            </label>
                                            <input defaultValue='' placeholder='Digite o numero do Frigobar' id="numero" {...register('numero', { required: true })} className='border
text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>

                                </div>
                                <div className='space-y-4'>
                                    <div className='mb-4'>
                                        <input value={id} disabled placeholder={frigobar.id} id="id" {...register('id', { value: frigobar.id })} className='border
text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <label>Status do frigobar</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register('ativo')}>
                                            <option>Selecione</option>
                                            <option value={1}>Ativo</option>
                                            <option value={0}>Inativo</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <label>A Qual acomodação este Frigobar pertence?</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("quartos_id")}>
                                            {quarto.map((quarto: any) => {

                                                return (
                                                    <>
                                                        <option value={quarto.id}>{quarto?.nome}</option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <input type='submit' className='
                                                    bg-[#111827]
                                                    text-gray-200 hover:bg-[#374151]
                                                    hover:text-gray-300 shadow-black
                                                    p-2 rounded-md cursor-pointer
                                                    transition-transform transform
                                                    active:scale-95 py-2 px-4
                                                    active:bg-[#000000] uppercase"
                                    '/>

                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>

    )
}



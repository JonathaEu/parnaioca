'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraItens from '@/functions/postItens';

type Inputs = {
    nome: string
    valor: string
    quantidade: number;
}

export default function RegisterItensModal({ getItem }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraItens({ data })
            .then((response) => {
                // window.alert('Item cadastrado com sucesso')
            }).catch((err) => {
                window.alert(err);
            });
        getItem()
        setOpenModal(false as any)
        reset();
    }

    return (
        <>
            <div className='mt-32 mb-4'>
                <Button className="ml-10 p-2 bg-orange-500" onClick={() => props.setOpenModal('form-elements')}>Cadastrar Itens</Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cadastrar Itens</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='text-slate-200 grid grid-cols-1 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4
    mt-14 px-5'>

                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center" />
                                </div>
                                <div className='grid grid-cols-1  content-center items-center justify-center justify-self-center'>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                                Nome do Item
                                            </label>
                                            <input defaultValue='' placeholder='Digite o nome completo' id="nome" {...register('nome', { required: true })} className='border 
                     text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label htmlFor="valor" className='block mb-2 text-sm font-medium'>
                                                Valor
                                            </label>
                                            <input defaultValue='' id="valor" placeholder="Digite o valor" {...register('valor')} className='border
                         text-gray-900 text-sm border-slate-950 rounded-md block p-2 w-80 hover:border-slate-800'/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label htmlFor="quantidade" className='block mb-2 text-sm font-medium'>
                                                Quantidade
                                            </label>
                                            <input defaultValue='' id="quantidade" placeholder="Digite o quantidade" {...register('quantidade')} className='border
                         text-gray-900 text-sm border-slate-950 rounded-md block p-2 w-80 hover:border-slate-800'/>
                                        </div>
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



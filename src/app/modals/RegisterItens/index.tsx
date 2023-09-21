'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import CadastrarItens from '../../../../public/assets/cadastrarItens.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraItens from '@/functions/postItens';
import InputMask from 'react-input-mask';


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
        console.log(data)
        cadastraItens({ data })
            .then((response) => {
                // window.alert('Item cadastrado com sucesso')
            }).catch((err) => {
                console.log(err);
            });
        getItem()
        setOpenModal(false as any)
        reset();
    }

    return (
        <>
            <div className='mt-20 mb-4'>

                <Button
                    className="
                     ml-10 mb-6 bg-[#111827]
                     text-gray-200 hover:bg-[#374151]
                     hover:text-gray-300 shadow-black
                     p-2 rounded-md cursor-pointer
                     transition-transform transform 
                     active:scale-95
                     active:bg-[#000000] uppercase"
                    onClick={() => props.setOpenModal('form-elements')}>
                    Cadastrar
                </Button>
                <Modal show={props.openModal === 'form-elements'}
                    size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div
                                className="
                            items-center flex
                            justify-center w-full
                            invert p-3 
                            ">
                                <img
                                    src={CadastrarItens.src}
                                    alt="adicionar"
                                    className="
                                    w-48 h-full items-center
                                    "
                                />
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='
                            text-slate-200 grid grid-cols-1
                             content-center items-center 
                             rounded backdrop-blur-sm
                             bg-black/20 w-3/3 rounded-x
                             shadow-lg shadow-slate-600
                             mx-auto p-4 py-4 mt-14 px-5
                             '>

                                <div className='
                                grid grid-cols-1 content-center
                                items-center justify-center
                                justify-self-center
                                '>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="nome"
                                                className='
                                            block mb-2 text-sm
                                            font-medium
                                            '>
                                                Nome
                                            </label>
                                            <input
                                                defaultValue=''
                                                placeholder='Digite o nome do item'
                                                id="nome" {...register('nome', { required: true })}
                                                className='
                                            border text-gray-900 text-sm
                                            rounded-md border-slate-950
                                            block w-80 p-1 hover:border-slate-800
                                            '/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="valor"
                                                className='
                                            block mb-2 text-sm
                                            font-medium
                                            '>
                                                Valor
                                            </label>
                                            <InputMask
                                                mask='R$ 99.99'
                                                placeholder='R$ 99.99'
                                                defaultValue=''
                                                id="valor"
                                                {...register('valor')}
                                                className='
                                            border text-gray-900
                                            text-sm border-slate-950
                                            rounded-md block p-1 w-[70px]
                                            hover:border-slate-800
                                            '/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="quantidade"
                                                className='
                                            block mb-2 text-sm
                                             font-medium
                                             '>
                                                Quantidade
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue=''
                                                id="quantidade"
                                                placeholder="00"
                                                {...register('quantidade')}
                                                className='
                                            border text-black
                                            text-sm border-slate-950
                                            rounded-md block p-1
                                            w-12 hover:border-slate-800
                                            '/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center p-2'>

                                    <input type='submit'
                                        className='
                                    bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    p-2 rounded-md cursor-pointer
                    transition-transform transform 
                    active:scale-95 py-2 px-4
                    active:bg-[#000000] uppercase
                                    ' />

                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>

    )
}



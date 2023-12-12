'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import CadastrarItens from '../../../../public/assets/cadastrarItens.png'
import { useForm, SubmitHandler } from "react-hook-form"
import cadastraItens from '@/functions/postItens';
import InputMask from 'react-input-mask';
import SucessAlert from '@/app/app/components/SucessAlert';
import FailAlert from '@/app/app/components/FailAlert';


type Inputs = {
    nome: string
    valor: string
    estoque: number;
}

const colors = [
    '#5788DE',
    '#57DEDE',
    '57DE82'
]

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
            .then((response: any) => {
                SucessAlert(response);
            }).catch((err) => {
                FailAlert(err);
            });
        getItem()
        setOpenModal(false as any)
        reset();
    }

    return (
        <>
            <div className='mt-[24px] mb-4 ml-[5%]'>

                <Button
                    className="
                     ml-10 mb-2 bg-[#111827]
                     text-gray-200 hover:bg-[#374151]
                     hover:text-gray-300 shadow-black
                     p-1 rounded-md cursor-pointer
                     transition-transform transform 
                     active:scale-95
                     active:bg-[#000000] uppercase"
                    onClick={() => props.setOpenModal('form-elements')}>
                    Cadastrar
                </Button>
                <Modal show={props.openModal === 'form-elements'}
                    size="md" popup onClose={() => props.setOpenModal(undefined)}
                    className="
                    flex items-center px-[25%]
                    justify-center x-50 fixed
                    self-center h-full backdrop-blur-sm
                    ">
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
                             rounded bg-black/20 w-3/3 rounded-x
                             shadow-lg mx-auto p-4 py-4 mt-14 px-5
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
                                            font-medium text-white
                                            '>
                                                Nome
                                            </label>
                                            <input
                                                defaultValue=''
                                                placeholder='Digite o nome do item'
                                                id="nome" {...register('nome', { required: true })}
                                                className='
                                            border text-black text-sm
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
                                                mask='99.99'
                                                placeholder='R$ 99.99'
                                                defaultValue=''
                                                id="valor"
                                                {...register('valor')}
                                                className='
                                            border
                                            text-sm border-slate-950
                                            rounded-md block p-1 w-[70px]
                                            text-black
                                            '/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="estoque"
                                                className='
                                            block mb-2 text-sm
                                             font-medium
                                             '>
                                                Quantidade
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue=''
                                                id="estoque"
                                                placeholder="00"
                                                {...register('estoque')}
                                                className='
                                            border
                                            text-sm border-slate-950
                                            rounded-md block p-1
                                            w-12 text-black
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



'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import api from '@/services/api';
import EditItens from '@/functions/editItens';
import editar from '../../../../public/assets/editar.png'
import editarItem from '../../../../public/assets/editarItem.png'
import InputMask from 'react-input-mask'

type Inputs = {
    nome: string
    valor: string
    quantidade: number;
    id: number
}

export default function EditItensModal({ getItem, index, data, item }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        EditItens({ data })
            .then((response) => {
                // window.alert('Item cadastrado com sucesso')
            }).catch((err) => {
                console.log(err)
                console.error(err)
            });
        getItem()
        setOpenModal(false as any)
        reset();
    }

    const NumberInput = () => {
        const [value, setValue] = useState(0);

        const handleChange = (event: any) => {
            const inputValue = parseInt(event.target.value, 10);

            if (!isNaN(inputValue) && inputValue >= 0) {
                setValue(inputValue);
            }
        };
    }

    
    const CurrencyInput = () => {
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event: any) => {
            const { value } = event.target;

            const validInput = /^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/.test(value);

            if (validInput) {
                setInputValue(value);
            }

        }
    }


    return (
        <>
            <div className=''>
                <Button className="w-[72px]" onClick={() => props.setOpenModal('form-elements')}>
                    <img src={editar.src} alt="editar" className="border-transparent" />
                </Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div className="flex items-center hover:invert justify-center">
                                <img src={editarItem.src}
                                    alt="editar-item"
                                    className="w-44 invert"
                                />
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='
                            text-slate-200 grid grid-cols-1
                            content-center items-center rounded-b-lg
                            backdrop-blur-sm bg-black/20 w-3/3
                            mx-auto p-4 py-4 mt-14 px-5
                                '>
                                <div
                                    className='
                                grid grid-cols-1 content-center
                                items-center justify-center
                                justify-self-center
                                '>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="nome"
                                                className='
                                            block mb-2 text-sm font-medium
                                            '>
                                                Nome do Item
                                            </label>
                                            <input defaultValue=''
                                                placeholder='Digite o nome do item'
                                                id="nome" {...register('nome', { required: true })}
                                                className='
                                            border text-gray-900 
                                            text-sm rounded-md 
                                            border-slate-950 block
                                            w-52 p-1 hover:border-slate-800
                                            '/>
                                        </div>
                                    </div>
                                    <div>

                                    <div className='space-y-4 flex items-center justify-center'>
                                        <span className="flex mt-4 mr-1 leading-10">Você está editando o item</span>
                                        <div className='mb-4'>
                                            <input defaultValue=''
                                                disabled placeholder={item.id}
                                                id="id" {...register('id', { value: item.id })}
                                                className='
                                                border text-gray-900
                                                text-sm rounded-md
                                            border-slate-950 items-center
                                            flex justify-center w-8
                                            p-1 hover:border-slate-800
                                            '/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label htmlFor="valor" className='block mb-2 text-sm font-medium'>
                                                Valor
                                            </label>
                                            <InputMask
                                            mask="R$ 99.99"
                                            placeholder="R$ 99.99"
                                            defaultValue=''
                                            id="valor"
                                            {...register('valor')}
                                            className='
                                            border text-gray-900
                                            text-sm border-slate-950
                                            rounded-md block p-1 w-20
                                            hover:border-slate-800
                                            '/>
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-4'>
                                            <label htmlFor="quantidade" className='block mb-2 text-sm font-medium'>
                                                Quantidade
                                            </label>
                                            <input 
                                            type="number"
                                            min="0"
                                            defaultValue=''
                                            id="quantidade"
                                            placeholder="0"
                                            {...register('quantidade')}
                                            className='
                                            border text-gray-900
                                            text-sm border-slate-950
                                            rounded-md block p-2 w-14
                                            hover:border-slate-800'
                                            />
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
                                    active:bg-[#000000] uppercase'/>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>

    )
}



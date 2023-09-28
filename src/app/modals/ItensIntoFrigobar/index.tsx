'use client';
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraItens from '@/functions/postItens';
import adicionarItens from '../../../../public/assets/adicionarItens.png'
import { BsTrashFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import { FiPlusCircle } from 'react-icons/fi';
import Image from 'next/image';
import getItens from '@/functions/getItens';
import { error } from 'console';

interface IitemIntoFrig {
    iten_id: any
    frigobar_id: number
    quantidade: any
}

export default function ItensIntoFrigobar({ frigobar, id }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [itens, setItens] = useState([]);

    useEffect(() => {
        getItens()
            .then((sucess: any) => {
                console.log(sucess)
                setItens(sucess.data)
            }).catch((error) => {
                console.log(error);
            });

    }, [getItens])


    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm()


    const onSubmit = (data: any) => {
        console.log(data);
        api.post('/frigobar_itens', data)
            .then((sucess) => {
                console.log(sucess)
            }).catch((error) => {
                console.log(error);
            });
        reset()
    };

    return (
        <>
            <div className=''>
                <div className="items-center flex justify-center">
                    <Button
                        className="
                    flex transition duration-300 
                    hover:bg-lime-900 col-span-1
                    bg-lime-700 uppercase border-none mt-2"

                        onClick={() => props.setOpenModal('form-elements')}>
                        Adicionar Itens
                    </Button>

                </div>
                <div className="">

                    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6">
                                <div className="flex items-center justify-center">
                                    <Image
                                        width={44}
                                        height={44}
                                        src={adicionarItens.src}
                                        alt="adicionarItens"
                                        className="w-44 invert  cover" />
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}

                                    className='text-slate-200 grid grid-cols-1
                                content-center items-center rounded 
                                 bg-[#2C3441]
                                  mx-auto p-4 py-4 mt-14 px-5'>
                                    <div className=' text-black'>
                                        <div>
                                            <label className="uppercase p-2 pb-3 font-semibold">Itens:</label>

                                            <select  {...register('iten_id')}>
                                                <option value=""></option>
                                                {itens.map((item: any, index: any) => {
                                                    return (
                                                        <option value={item.id}>{item.nome}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="uppercase p-2 pb-3 font-semibold">Adicionando ao frigobar:</label>
                                            <input type="number" disabled {...register('frigobar_id', { value: frigobar.id })} />
                                        </div>

                                        <div>

                                            <label className="uppercase p-2 pb-3 font-semibold">Quantidade:</label>
                                            <br />
                                            <input type="number" {...register('quantidade')} />
                                        </div>

                                    </div>
                                    <div className='flex flex-col-2 justify-around items-center p-2'>

                                        <button
                                            type='submit'
                                            className='bg-blue-700 font-semibold
                                        hover:bg-blue-900 cursor-pointer p-2
                                        items-center flex rounded-2xl text-gray-200
                                        hover:text-gray-300 space-evenly
                                         shadow-black
                                        transition-transform transform 
                                        active:scale-95 py-2 px-2
                                        active:bg-[#000000] uppercase'
                                        ><MdAddCircle />

                                        </button>

                                        <button
                                            type='button'
                                            className='bg-red-700 font-semibold
                                        hover:bg-red-900 cursor-pointer p-2
                                        items-center flex rounded-2xl text-gray-200
                                        hover:text-gray-300 space-evenly
                                        shadow-black
                                        transition-transform transform 
                                        active:scale-95 py-2 px-2
                                        active:bg-[#000000] uppercase'>
                                            <BsTrashFill />

                                        </button>
                                    </div>
                                </form >
                            </div>
                        </Modal.Body >
                    </Modal >
                </div >
            </div >
        </>
    )
}


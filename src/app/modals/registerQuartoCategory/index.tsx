'use client'
import cadastraTipoQuarto from "@/functions/postQuartoCategory";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from "react";


type Inputs = {
    tipo: string;
}

export default function RegisterQuartoCategory({ getTipoQuarto }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraTipoQuarto({ data })
            .then((sucess) => {
                reset();

                getTipoQuarto();
            })
            .catch((err) => {
                console.log(err);
            });
        setOpenModal(undefined);
    }
    return (


        <div className="ml-10 m-2">
            <Button
                className="
                   
                bg-[#111827]
                text-gray-200 hover:bg-[#374151]
                hover:text-gray-300 shadow-black
                p-2 rounded-md cursor-pointer
                transition-transform transform 
                active:scale-95 py-2 px-[15px]
                active:bg-[#000000] uppercase"

                onClick={() => props.setOpenModal('registerQuartoCategory')}>
                Registrar Categoria
            </Button>

            <Modal
                className="
            flex items-center px-[25%]
            justify-center x-50 fixed
            self-center h-full
            backdrop-blur-sm
            "
                show={props.openModal === 'registerQuartoCategory'}
                size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>

                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}
                            className=' mx-auto p-20 bg-slate-600 shadow-md rounded-b-lg'>
                            <div className='space-y-4'>
                                <div className='mb-4'>
                                    <label htmlFor="tipo"
                                        className='
                                    flex items-center 
                                    justify-center text-gray-300 
                                    font-semibold text-sm
                                    uppercase p-2'
                                    >
                                        Tipo de Acomodação:
                                    </label>

                                    <input defaultValue='' id="tipo" {...register('tipo', { required: true })}
                                        className='
                                        border-red-50 border
                                    text-gray-900 text-sm
                                    rounded-md block w-full
                                    p-2 hover:border-slate-800'
                                    />
                                </div>
                            </div>
                            <div>
                                <input type='submit'
                                    className=' 
                                
                                    bg-[#374151]
                                    text-gray-200 hover:bg-[#111827]
                                    hover:text-gray-300 shadow-black
                                    p-2 rounded-md cursor-pointer
                                    transition-transform transform 
                                    active:scale-95 py-2 px-4
                                    active:bg-[#000000]'
                                />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import logoEditarFrigobar from '../../../../public/assets/editarFrigobar.png';
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
                <Button className="border-none" onClick={() => props.setOpenModal('edit')}>
                    <img src={editar.src} alt="editar" className="w-9" />
                </Button>

                <Modal show={props.openModal === 'edit'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="">
                            <div className="
                            flex items-center 
                            justify-center
                            ">
                                <img
                                    src={logoEditarFrigobar.src}
                                    alt="edit-frigobar"
                                    className="w-52 invert" />
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='
                                text-gray-800 content-center
                                items-center
                                bg-black/20 w-3/3
                                shadow-lg rounded-b-lg
                                mx-auto p-4 py-4 mt-14 px-5
                                dark:text-white
                        '>

                                <div
                                    className='
                                grid grid-cols-1 
                                md:grid-cols-2 
                                content-center 
                                items-center
                                '>

                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label
                                                htmlFor="numero"
                                                className='
                                            block mb-2 text-sm
                                            font-medium
                                            '>
                                                <div
                                                    className="
                                                flex justify-center
                                                items-center
                                                bg-red-500 w-full
                                                rounded-lg animate-pulse
                                                ">
                                                    <h5
                                                        className="
                                                p-2 flex"
                                                    >FRIGOBAR </h5>
                                                    {frigobar.id}
                                                </div>
                                            </label>
                                            <div
                                                className="
                                            flex m-2
                                            items-center
                                            justify-evenly
                                            ">
                                                <span className="text-sm">
                                                    Número do Frigobar:
                                                </span>
                                                <input
                                                    type="number"
                                                    defaultValue=''
                                                    min="0"
                                                    placeholder='00'
                                                    id="numero"
                                                    {...register('numero', { required: true })}
                                                    className='
                                            border text-gray-900 text-sm
                                            rounded-md border-slate-950
                                            w-12 p-1 hover:border-slate-800
                                            items-center flex '/>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='space-y-4'>
                                    <div className='mb-4'>

                                        <input
                                            value={frigobar.id}
                                            disabled
                                            placeholder={frigobar.id}
                                            id="id"
                                            {...register('id', { value: frigobar.id })}
                                            className='
                                        border text-gray-900
                                        text-sm rounded-md
                                        border-slate-950 block
                                        w-8 p-1 hover:border-slate-800
                                        '/>

                                    </div>
                                </div>

                                <div className='text-center'>
                                    <label
                                        className="
                                    uppercase text-sm
                                    font-bold
                                    ">
                                        Status
                                    </label>
                                    <div
                                        className='
                                    flex mb-8 text-black
                                    justify-center items-center mt-2'>
                                        <select {...register('ativo')}>
                                            <option></option>
                                            <option value={1}>Ativo</option>
                                            <option value={0}>Inativo</option>
                                        </select>
                                    </div>
                                </div>

                                <div
                                    className='
                                text-center text-sm
                                font-semibold uppercase 
                                '>
                                    <label>Acomodação pertencente</label>
                                    <div
                                        className='
                                    flex gap-10
                                    mb-8 text-black
                                    justify-center
                                    items-center
                                    '>
                                        <select {...register("quartos_id")}>
                                            <option></option>
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

                                <div className="
                                flex items-center
                                justify-center
                                ">
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



'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import drink from '../../../../public/assets/drink.png'
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import drinkFrigobar from '../../../../public/assets/drink-frigobar.png'
import fundoModal from '../../../../public/assets/fundo-modal-frigobar.png'
import { LuAlertOctagon } from 'react-icons/lu';

type Inputs = {
    quartos_id: number
    numero: number
    ativo: number
}


export default function registerFrigobarModal({ getFrigobar }: any) {

    const icons = [
        { icon: LuAlertOctagon },
    ]

    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        RegistraFrigobar({ data })
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
    const [quarto, setQuarto] = useState([]);
    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/quarto');
            setQuarto(response.data.data);
            // console.log(response.data.data);
        };
        getQuarto();
    }, []);
    const [frigobar, setFrigobar] = useState([]);
    useEffect(() => {
        const getFrigobar = async () => {
            const response = await api.get('/frigobar');
            setFrigobar(response.data.data);
            // console.log(response.data.data);
        };
        getFrigobar();
    }, []);

    return (
        <>

            <div className='mt-10 mb-4'>
                <Button
                    className="
                     ml-10 mb-6 bg-[#111827]
                     text-gray-200 hover:bg-[#374151]
                     hover:text-gray-300 shadow-black
                     p-2 rounded-md cursor-pointer
                     transition-transform transform 
                     active:scale-95 py-2 px-4
                     active:bg-[#000000] uppercase"

                    onClick={() => props.setOpenModal('form-elements')}>
                    Cadastrar
                </Button>

                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>

                        <div className="bg-[#6E737D] bg-black/20 w-3/3 mx-auto p-4 py-4">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='grid grid-cols-1 p-2'>

                                <div className="flex bg-[#B0DBEB] justify-center items-center w-full">
                                    <img
                                        src={drinkFrigobar.src}
                                        alt="cadastro"
                                        className="w-56 p-2 " />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                    <div className='p-2'>
                                        <div className=''>
                                            <div className="items-center flex">

                                                <label htmlFor="numero" className='mb-2 text-sm text-white font-semibold'>
                                                    Número
                                                </label>
                                            </div>
                                            <div className="flex items-center">

                                                <input
                                                    defaultValue=''
                                                    id="numero" {...register('numero', { required: true })}
                                                    aria-invalid={errors.numero ? "true" : "false"}
                                                    placeholder='0'
                                                    className='
                                                border text-gray-900
                                                text-sm rounded-md
                                                border-slate-950 
                                                block w-10 p-1
                                                hover:border-slate-800'
                                                />
                                            </div>
                                            {errors.numero?.type === "required" && (
                                                <p role="alert"
                                                    className='
                                                w-80 text-[12px] rounded 
                                                bg-red-600 text-slate-50 indent-2
                                                 flex items-center justify-evenly uppercase
                                                '>
                                                    <LuAlertOctagon />
                                                    Precisa informar o número do frigobar
                                                </p>
                                            )}

                                        </div>
                                    </div>

                                </div>

                                <div className='
                                ml-2 text-sm text-white font-semibold
                                '>
                                    <label>
                                        Status
                                    </label>

                                    <div className='flex gap-10 mb-5 rounded-sm text-black mt-2'>
                                        <select {...register("ativo")}>
                                            <>
                                                <option value={2}></option>
                                                <option value={1}>Ativo</option>
                                                <option value={0}>Inativo</option>

                                            </>
                                        </select>


                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="ml-2 text-sm text-white font-semibold">
                                        A qual acomodação este frigobar pertence?
                                    </label>

                                    <div className='flex gap-20 transition-transform mb-8 text-black p-2'>
                                        <select {...register("quartos_id")}>
                                            <option value=""></option>
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

                                <div className="flex items-center justify-center">
                                    <input
                                        type='submit'
                                        className='bg-[#111827]
                                        text-gray-200 hover:bg-[#374151]
                                        hover:text-gray-300 shadow-black
                                        p-2 rounded-md cursor-pointer
                                        transition-transform transform 
                                        active:scale-95 py-2 px-4
                                        active:bg-[#000000]
                                        font-bold'
                                    />

                                </div>

                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



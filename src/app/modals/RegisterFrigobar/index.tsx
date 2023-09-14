'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import drink from '../../../../public/assets/drink.png'
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';

type Inputs = {
    quartos_id: number
    numero: number
    ativo: number
}

export default function registerFrigobarModal({ getFrigobar }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
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

            <div className='mt-32 mb-4'>
                <Button className="ml-10 p-2 bg-orange-500" onClick={() => props.setOpenModal('form-elements')}>Cadastrar frigobar</Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="">
                                <div className="flex items-center">
                                    <img src={drink.src} alt="cadastro" className="p-2 w-28 h-full content-center flex items-center"
                                    />
                            <h3 className="text-center text-bold uppercase text-white text-2xl">Cadastrar Frigobar</h3>
                                </div>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='mx-auto p-12 dark:text-white'>
                                <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                    <div className=''>
                                        <div className='mb-4'>
                                            <label htmlFor="numero" className='block mb-2 text-sm font-medium'>
                                                Número
                                            </label>
                                            <input defaultValue='' placeholder='Digite o numero do Frigobar' id="numero" {...register('numero', { required: true })} className='border 
text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>

                                </div>

                                <div className='text-center'>
                                    <label>Qual o status do frigobar?</label>
                                    <div className='flex gap-10 mb-5 text-black justify-center items-center mt-2'>
                                        <select {...register("ativo")}>
                                            <>
                                                <option value={2}></option>
                                                <option value={1}>Ativo</option>
                                                <option value={0}>Inativo</option>
                                            </>
                                        </select>
                                    </div>
                                </div>
<br />
                                <div className='text-center'>
                                    <label>A qual acomodação este frigobar pertence?</label>
                                    <div className='flex gap-20 transition-transform mb-8 text-black justify-center items-center mt-10'>
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
                                    <input type='submit' className='hover:border-[#282a3a] cursor-pointer rounded bg-[#252f46] hover:bg-[#3c4d7b] hover:transition-opacity text-white hover:text-black font-bold py-1 px-2'/>

                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>

    )
}



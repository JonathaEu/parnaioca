'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'

import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar/idex';
import api from '@/services/api';

type Inputs = {
    quartos_id: number
    numero: number
    ativo: number
}

export default function FormElements() {
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
                window.alert('Frigobar cadastrado com sucesso')
            }).catch((err) => {
                console.log(err)
                console.error(err)
                window.alert(err);
            });
        // reset();
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
                <Button className="ml-10 p-2" onClick={() => props.setOpenModal('form-elements')}>Cadastrar frigobar</Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cadastrar Frigobar</h3>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='text-gray-800 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4 mt-14 px-5  dark:text-white
                        '>

                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center"
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 content-center items-center'>

                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label htmlFor="numero" className='block mb-2 text-sm font-medium'>
                                                Numero
                                            </label>
                                            <input defaultValue='' placeholder='Digite o numero do Frigobar' id="numero" {...register('numero', { required: true })} className='border 
text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800'/>
                                        </div>
                                    </div>

                                </div>

                                <div className='text-center'>
                                    <label>Qual o status do frigobar?</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("ativo")}>
                                            <>
                                                <option value={1}>Ativo</option>
                                                <option value={0}>Inativo</option>
                                            </>
                                        </select>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <label>A Qual acomodação este Frigobar pertence?</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("quartos_id")}>
                                            {quarto.map((quarto) => {

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
                                    <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca] left-[130px] mt-10
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



"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraEstacionamento from '@/functions/RegisterEstacionamento'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import estacionamentoAvatar from '../../../../public/assets/EstacionamentoAvatar.png';

type Inputs = {
    quartos_id: number
}


export default function RegisterEstacionamentoModal() {
    const [estacionamento, setEstacionamento] = useState([]);
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        RegistraEstacionamento({ data })
            .then((response) => {
                window.alert('Estacionamento Relacionado com sucesso')
            }).catch((err) => {
                window.alert(err);
            });
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
    return (
        <>
            <div
                className='
            mt-10 mb-4'
            >

                <Button
                    className="
                    ml-10 mb-6 bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    rounded-md cursor-pointer
                    transition-transform transform 
                    active:scale-95 text-lg
                    active:bg-[#000000] uppercase"

                    onClick={() => props.setOpenModal('form-elements')}>
                    cadastrar
                </Button>

                <Modal
                    show={props.openModal === 'form-elements'}
                    size="md" popup onClose={() => props.setOpenModal(undefined)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6 p-2">
                            <div
                                className="
                            flex items-center
                            bg-[#FDF9F9] w-full
                            justify-center
                            ">
                                <img
                                    src={estacionamentoAvatar.src}
                                    alt="estacionamento"
                                    className="w-56 p-2"
                                />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='p-4
                            text-slate-200 grid grid-cols-1
                            content-center items-center
                            backdrop-blur-sm bg-[#6E737D] w-3/3
                            rounded-x shadow-lg rounded-b-lg
                            mx-auto py-4 mt-14 px-5
                             '>

                                <div
                                    className='
                                text-center text-gray-900
                                font-semibold
                                '>
                                    <label>
                                        Para qual acomodação essa vaga está designada?
                                    </label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("quartos_id")}>
                                            <option></option>

                                            {quarto.map((item) => {

                                                return (
                                                    <>
                                                        <option value={item.id}>{item?.nome}</option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <input
                                        type='submit'
                                        className='
                                        bg-[#111827]
                                        text-gray-200 hover:bg-[#374151]
                                        hover:text-gray-300 shadow-black
                                        p-2 rounded-md cursor-pointer
                                        transition-transform transform 
                                        active:scale-95 py-2 px-4
                                        active:bg-[#000000]
                                        font-bold
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

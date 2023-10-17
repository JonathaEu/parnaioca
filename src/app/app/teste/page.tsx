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
import adicionarItens from '../../../../public/assets/adicionarItens.png'
import getItens from '@/functions/getItens';

type Inputs = {
    iten_id: number
    reservas_id: any
    quantidade: any
    valor_total: any
}


export default function registerFrigobarModal() {
    const [itens, setItens] = useState([]);
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
        reset();
    }

    useEffect(() => {
        getItens()
            .then((response: any) => {
                console.log(response);
                setItens(response.data);
            })
    }, [])


    return (
        <>

            <div className='mt-10 mb-4'>

                <div className="space-y-6">
                    <div className="flex items-center justify-center">
                        <img
                            src={adicionarItens.src}
                            alt="adicionarItens"
                            className="w-44 invert" />
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}

                            className='text-slate-200 grid grid-cols-1
                                content-center items-center rounded 
                                 bg-[#2C3441]
                                  mx-auto p-4 py-4 mt-14 px-5'>
                        </form>
                    </div>
                </div >
            </div >
        </>

    )
}



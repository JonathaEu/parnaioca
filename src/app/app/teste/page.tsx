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
import { BsTrashFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import { FiPlusCircle } from 'react-icons/fi';



type Inputs = {
    iten_id: number
    reservas_id: any
    quantidade: any
    valor_total: any
}


export default function registerFrigobarModal({ getFrigobar }: any) {

    const icons = [
        { icon: LuAlertOctagon },
    ]
    const [itens, setItens] = useState([]);
    const [itensIntoFrig, setItensIntoFrig] = useState([]);
    // const [arrayInicial, setArrayInicial] = useState([]);
    const [quantidade, setQuantidade] = useState<number>(0);
    const [valor_total, setValor_total] = useState<number>();
    const [reservas_id, setReservas_id] = useState([]);

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
    const getItens = async () => {
        const response = await api.get('/itens');
        setItens(response.data.data);
        // console.log(response);
        // console.log(itens);
    };
    useEffect(() => {
        getItens();
    }, []);
    const [reserva, setReserva] = useState([]);
    useEffect(() => {
        const getReserva = async () => {
            const response = await api.get('/reserva_rel');
            setReserva(response.data.data);
            // console.log(response.data.data);
        };
        getReserva();
    }, []);


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

                    <form onSubmit={handleSubmit(onSubmit)}

                        className='text-slate-200 grid grid-cols-1
                                content-center items-center rounded 
                                 bg-[#2C3441]
                                  mx-auto p-4 py-4 mt-14 px-5'>
                    </form>
                </div >
            </div >
        </>

    )
}



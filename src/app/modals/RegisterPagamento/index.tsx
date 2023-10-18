'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import drinkFrigobar from '../../../../public/assets/drink-frigobar.png'
import { LuAlertOctagon } from 'react-icons/lu';
import CadastraPagamento from '@/functions/PostPagamento';

type Inputs = {
    valor: number
    metodo: string
    reservas_id: number
    parcelas: number
}


export default function RegisterPagamento({ id_da_reserva, debito }: any) {
    const [ParcelasOptArray, setParcelasOptArray] = useState<any>([])
    const [reservas_id, setReservas_id] = useState<number>();
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
        CadastraPagamento({ data })
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
                console.error(err)
            });
        setOpenModal(false as any)
        reset();
    }

    function ParcelasOpt() {
        const array = [];
        const reservas_id = id_da_reserva[0];
        setReservas_id(reservas_id);
        for (let number = 1; number < 13; number++) {
            array.push(number)
            setParcelasOptArray(array)
        }
    }
    return (
        <>

            <div className='mb-4'>
                <div className="justify-center flex">
                    <Button
                        className="
                    mb-6 bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    p-2 rounded-md cursor-pointer 
                    transition-transform transform 
                    active:scale-95 py-2 px-4 flex
                    active:bg-[#000000] uppercase"

                        onClick={() => { props.setOpenModal('form-elements'), ParcelasOpt() }}>
                        Registrar Pagamento
                    </Button>
                </div>
                <div>
                    <Modal
                        className='flex pt-[7%] items-center justify-center x-50 fixed self-center h-full backdrop-blur-sm'
                        show={props.openModal === 'form-elements'} size="md"
                        popup onClose={() => props.setOpenModal(undefined)}>
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

                                    <div className='flex flex-col content-center items-center justify-center'>

                                        <div className='p-2'>
                                            <div className=''>
                                                <div className="items-center flex">

                                                    <label htmlFor="valor" className='mb-2 text-sm text-white font-semibold'>
                                                        Valor do Pagamento
                                                    </label>
                                                </div>
                                                <div className="flex items-center justify-center">

                                                    <input
                                                        defaultValue={debito}
                                                        id="valor" {...register('valor', { required: true })}
                                                        aria-invalid={errors.valor ? "true" : "false"}
                                                        placeholder={debito}
                                                        className='
                                                border text-gray-900
                                                text-sm rounded-sm
                                                border-slate-950 
                                                block w-[88px]  p-1
                                                hover:border-slate-800'
                                                    />
                                                </div>
                                                {errors.valor?.type === "required" && (
                                                    <p role="alert"
                                                        className='
                                                w-80 text-[12px] rounded 
                                                bg-red-600 text-slate-50 indent-2
                                                 flex items-center justify-evenly uppercase
                                                '>
                                                        <LuAlertOctagon />
                                                        Precisa informar o Valor do pagamento
                                                    </p>
                                                )}

                                            </div>
                                        </div>


                                        <div className='
                                ml-2 text-sm text-white font-semibold
                                mt-4
                                '>
                                            <label>
                                                Método
                                            </label>

                                            <div className='flex gap-10 mb-5 rounded-sm text-black mt-2'>
                                                <select {...register("metodo")}
                                                    className='p-1 rounded-sm'
                                                >
                                                    <>
                                                        <option value={2}></option>
                                                        <option>Dinheiro</option>
                                                        <option>Cartão</option>
                                                        <option>Pix</option>

                                                    </>
                                                </select>


                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                className="ml-2 text-sm text-white font-semibold">
                                                Parcelas
                                            </label>

                                            <div className='flex gap-20 transition-transform mb-8 text-black p-2'>
                                                <select {...register("parcelas")}
                                                    className='p-1 rounded-sm'
                                                >
                                                    {ParcelasOptArray.map((opcoes: any) => {
                                                        return <option>{opcoes}</option>
                                                    })}
                                                </select>
                                            </div>


                                        </div>
                                        <div>
                                            <input className='w-10 hover:cursn hidden' disabled
                                                type="text" {...register('reservas_id', { value: reservas_id })} />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center mt-6">
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
                </div>
            </div >
        </>

    )
}



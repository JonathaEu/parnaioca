'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import { LuAlertOctagon } from 'react-icons/lu';
import cadastraQuarto from '@/functions/postQuartos';
import cadastrarQuartos from '../../../../public/assets/cadastrar-quartos.png';
import InputMask from 'react-input-mask';
import avatarCadastroAcomodacoes from '../../../../public/assets/avatarCadastroAcomodacoes.png'


type Inputs = {
    nome: string;
    numero: number;
    valor: number;
    max_cap: number;
    tipo_quartos_id: number;
}



export default function RegisterQuartoModal({ getFrigobar }: any) {

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
    const onSubmit: SubmitHandler<Inputs> = data => {
        cadastraQuarto({ data });
        console.log(data);
        // reset();
    }

    const [tipoQuarto, setTipoQuarto] = useState([]);

    useEffect(() => {
        const getTipoQuarto = async () => {
            const response = await api.get('/tipo_quarto');
            setTipoQuarto(response.data.data);
            console.log(response.data.data);
        };
        getTipoQuarto();
    }, []);

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
                <Button
                    className="
                    bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    p- rounded-md cursor-pointer
                    transition-transform transform 
                    active:scale-95 py-2
                    active:bg-[#000000] uppercase"

                    onClick={() => props.setOpenModal('registerQuartoModal')}>
                    Cadastrar Acomodação
                </Button>

                <Modal show={props.openModal === 'registerQuartoModal'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>

                        <div className="bg-[#6E737D] h-auto text-white bg-black/20">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className='p- rounded-b-lg
                                bg-[#2C3441]'>

                                <div
                                    className="
                                uppercase flex p-4
                                items-center justify-center
                                text-white font-semibold
                                
                                ">
                                    <div className="w-full bg-[#7ED957]
                                    items-center flex justify-center">
                                        <img
                                            src={avatarCadastroAcomodacoes.src}
                                            alt="registro"
                                            className="w-56"
                                        />
                                    </div>
                                </div>

                                <div className="ml-10">
                                    <div className='space-y-4'>
                                        <div className='mb-1'>
                                            <label htmlFor="nome"
                                                className='block mb-2 
                                        text-sm font-medium'>
                                                Acomodação
                                            </label>

                                            <input
                                                defaultValue=''
                                                placeholder='Coloque o nome da acomodação aqui'
                                                id="nome" {...register('nome',
                                                    { required: "Acrescente o nome da acomodação" })}
                                                className='
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded block w-[260px] 
                        p-1 hover:border-slate-800'
                                            />
                                        </div>
                                    </div>

                                    <div className='space-y-4 '>
                                        <div className='mb-1'>
                                            <label htmlFor="numero"
                                                className='
                                        block mb-2 text-sm
                                        font-medium'
                                            >
                                                Número do Quarto
                                            </label>
                                            <input defaultValue=''
                                                type='number'
                                                min="0"
                                                placeholder='0'
                                                id="numero" {...register('numero', { required: true })}
                                                className='
                                        border border-gray-300
                                        text-gray-900 text-sm
                                        rounded block w-[40px] 
                                        p-1 hover:border-slate-800'
                                            />
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='mb-1'>
                                            <label htmlFor="valor"
                                                className='block mb-2 text-sm font-medium'>
                                                Valor
                                            </label>
                                            <InputMask
                                                mask="R$ 999.99"
                                                type="text"
                                                placeholder="R$ 0,00"
                                                defaultValue=''
                                                id="valor"
                                                prefix="R$"
                                                {...register('valor', { required: true })}
                                                className='border border-gray-300
                                          text-gray-900 text-sm rounded-md w-[80px]
                                            block p-1 hover:border-slate-800'
                                            />

                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='mb-4'>
                                            <label htmlFor="max_cap" className='block mb-2 text-sm font-medium'>
                                                Capacidade Máxima
                                            </label>
                                            <div className="flex mb-2 text-sm font-medium items-center">
                                                <input defaultValue=''
                                                    min="0"
                                                    placeholder="0"
                                                    id="max_cap" {...register('max_cap', { required: true })}
                                                    className='
                                                border border-gray-300
                                                text-gray-900 text-sm rounded-md w-[50px]
                                                block p-1 hover:border-slate-800'/> 
                                                <span className="pl-2">
                                                hóspede(s)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>


                                <div className='flex gap-8 mb-2 m-10'>
                                    <label className="block mb-2 
                                        text-sm font-medium">
                                        Categoria da acomodação
                                    </label>
                                    <select {...register("tipo_quartos_id")}>
                                        {tipoQuarto.map((item) => {

                                            return (
                                                <>
                                                    <option value={item.id}
                                                        className=""
                                                    >
                                                        {item?.tipo}</option>
                                                </>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="flex
                                        items-center justify-center
                                        pb-4">
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



'use client';
import { useEffect, useState, useContext } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraCliente from '@/functions/postClientes';
import BuscarCliente from '@/functions/get-clientes';
import { useStateContext } from '@/context/AuthProvider';
import ReactInputMask from 'react-input-mask';
import avatar from '../../../../public/assets/avatar-modal-cliente.png'


type Inputs = {
    id: number;
    nome: string;
    cpf: number;
    email: string;
    nascimento: Date;
    telefone: number;
    cidade: string;
    estado: string;
    genero: string;
}

export default function RegisterClientesModal() {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraCliente({ data })
            .then((response) => {
                reset();

            }).catch((err) => {
                window.alert(err)
            });
        // console.log(data)
    }
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
            <div className=''>
                <div className='relative flex mt-10 ml-5 m-2'>
                    <Button className="
                    ml-[4%] right-0 mb-6 bg-[#111827]
                    text-gray-200 hover:bg-[#374151]
                    hover:text-gray-300 shadow-black
                    p-2 rounded-md cursor-pointer
                    transition-transform transform 
                    active:scale-95 py-2 px-4
                    active:bg-[#000000] uppercase"
                        onClick={() => props.setOpenModal('form-elements')}>
                        Cadastrar Cliente
                    </Button>
                </div>
                <div className=''>
                    <Modal
                        className='flex pt-10 items-center justify-center x-50 fixed self-center h-full backdrop-blur-sm'
                        show={props.openModal === 'form-elements'} popup onClose={() => props.setOpenModal(undefined)}>
                        <Modal.Header />
                        <Modal.Body>
                            <div className="space-y-6 w-full p-2">
                                <div className="flex justify-center items-center w-full bg-[#5a6c89]">
                                    <img src={avatar.src} alt="cadastro" className="w-64" />
                                </div>
                                <div className="mb-3 flex m-0 justify-center">
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className='grid grid-cols-2 gap-20'>

                                            {/* Engloba 4 campos inputs */}
                                            <div className='space-y-4'>
                                                <div className=''>
                                                    <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                                        Nome
                                                    </label>
                                                    <input
                                                        defaultValue=''
                                                        placeholder='Digite o nome completo'
                                                        id="nome"
                                                        {...register('nome', { required: true })}
                                                        className='border text-gray-900
                                        text-sm rounded-md border-slate-950
                                        block w-80 p-2 hover:border-slate-800'
                                                    />
                                                </div>

                                                <div className=''>
                                                    <label htmlFor="email"
                                                        className='block mb-2 text-sm font-medium'>
                                                        Email
                                                    </label>
                                                    <input
                                                        defaultValue=''
                                                        id="email"
                                                        placeholder="exemplo@exemplo.com"
                                                        {...register('email')}
                                                        className='border text-gray-500
                                          text-sm border-slate-950
                                          rounded-md block p-2 
                                          w-80 hover:border-slate-800'/>
                                                </div>

                                                <div className=''>
                                                    <label htmlFor="cpf" className='block mb-2 text-sm font-medium'>
                                                        CPF
                                                    </label>
                                                    <ReactInputMask
                                                        defaultValue=''
                                                        placeholder="Digite o CPF"
                                                        mask="999.999.999-99"
                                                        id="cpf" {...register('cpf')}
                                                        className='border text-gray-900 
                                        text-sm border-slate-950
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'/>
                                                </div>

                                                <div className='space-y-4'>
                                                    <label htmlFor="nascimento" className='block mb-2 text-sm font-medium'>
                                                        Data de Nascimento
                                                    </label>
                                                    <input
                                                        type="date"
                                                        defaultValue=''
                                                        id="nascimento"
                                                        {...register('nascimento')}
                                                        className='border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'
                                                    />
                                                </div>
                                            </div>
                                            {/* Engloba outros 4 campos inputs */}
                                            <div className='space-y-4'>
                                                <div className="">
                                                    <label htmlFor="genero" className="block mb-2 text-sm font-medium">
                                                        Gênero
                                                    </label>
                                                    <select
                                                        {...register('genero')}
                                                        className="
                                            border text-gray-900
                                            text-sm border-slate-950
                                            rounded-md block p-2 w-80
                                            hover:border-slate-800"
                                                    >
                                                        <option value=" "></option>
                                                        <option value="masculino">Masculino</option>
                                                        <option value="feminino">Feminino</option>
                                                        <option value="nao-binario">Não Binário</option>
                                                    </select>
                                                </div>

                                                <div className='space-y-3'>
                                                    <label htmlFor="telefone" className='block mb-2 text-sm font-medium'>
                                                        Telefone
                                                    </label>
                                                    <ReactInputMask
                                                        mask="(99) 99999-9999"
                                                        defaultValue=''
                                                        id="telefone"
                                                        placeholder="(00) 00000-0000"
                                                        {...register('telefone')}
                                                        className='
                                        border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'/>
                                                </div>

                                                <div className=''>
                                                    <label htmlFor="cidade" className='block mb-2 text-sm font-medium'>
                                                        Cidade
                                                    </label>
                                                    <input defaultValue=''
                                                        id="cidade"
                                                        placeholder="Digite a cidade"
                                                        {...register('cidade')}
                                                        className='border text-gray-900
                                        border-slate-950 text-sm
                                        rounded-md block w-80 p-2
                                        hover:border-slate-800'
                                                    />
                                                </div>

                                                <div className='space-y-4'>
                                                    <label htmlFor="estado" className='block mb-2 text-sm font-medium'>
                                                        Estado
                                                    </label>
                                                    <input
                                                        defaultValue=''
                                                        id="estado"
                                                        placeholder="Digite o estado"
                                                        {...register('estado')}
                                                        className='
                                        border text-gray-900
                                        text-sm rounded-md
                                        border-slate-950 block
                                        w-80 p-2 hover:border-slate-800'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center p-2'>

                                            <div className="rounded-lg">

                                                <input type='submit'
                                                    className='
                                        mb-6 bg-[#111827]
                                        text-gray-200 hover:bg-[#374151]
                                        hover:text-gray-300 shadow-black
                                         rounded-md cursor-pointer
                                        transition-transform transform 
                                        active:scale-95 py-2 px-4
                                        active:bg-[#000000] uppercase' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </>

    )
}



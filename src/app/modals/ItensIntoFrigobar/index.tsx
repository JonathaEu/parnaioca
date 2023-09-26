'use client';
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraItens from '@/functions/postItens';
import adicionarItens from '../../../../public/assets/adicionarItens.png'
import { BsTrashFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import { FiPlusCircle } from 'react-icons/fi';

interface IitemIntoFrig {
    iten_id: any
    frigobar_id: any
    quantidade: any
}

export default function ItensIntoFrigobar({ getItem, index, frigobar, id }: any) {
    const [selecoes, setSelecoes] = useState<string[]>([]);
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [itens, setItens] = useState([]);
    const [itensIntoFrig, setItensIntoFrig] = useState([]);
    // const [arrayInicial, setArrayInicial] = useState([]);
    const [quantidade, setQuantidade] = useState<number>(1);
    const [idItem, setIdItem] = useState([]);
    const [idItemAnteriores, setIdItemAnteriores] = useState([]);
    const [quantidadesAnteriores, setQuantidadesAnteriores] = useState([]);


    const adicionarAoArray = () => {
        // Adicione o valor atual da quantidade ao array de quantidades anteriores
        setQuantidadesAnteriores((prevQuantidades): any => [...prevQuantidades, quantidade]);
    };
    const adicionarIdAoArray = () => {
        // Adicione o valor atual da quantidade ao array de quantidades anteriores
        setIdItemAnteriores((prevId): any => [...prevId, idItem]);
    };
    const handleQuantidadeChange = (e: any) => {
        const novaQuantidade = Number(e.target.value);
        setQuantidade(novaQuantidade); // Atualize a quantidade atual
        console.log(quantidade)
    };

    const getItens = async () => {
        const response = await api.get('/itens');
        setItens(response.data.data);
        // console.log(response);
        // console.log(itens);
    };
    useEffect(() => {
        getItens();
    }, []);
    const getItensInFrigobar = async () => {
        const response = await api.get('/frigobar_itens');
        setItensIntoFrig(response.data.data);
    }
    useEffect(() => {
        getItensInFrigobar();
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm()
    const onSubmit = () => {
        postItemIntoFrig()
        // Manipule os dados conforme necessário, neste caso, adicionando à lista de seleções
        // console.log()
    };
    const postItemIntoFrig = () => {
        const item = itens.find((item: any) => item?.id === id);
        const frigItem: IitemIntoFrig = {
            iten_id: idItemAnteriores,
            frigobar_id: frigobar.id,
            quantidade: quantidadesAnteriores
        };
        console.log(frigItem)
        console.log(quantidadesAnteriores)
        api.post('/frigobar_itens', frigItem);
        // const novoArray = [].concat(arrayInicial, frigItem);
        // console.log(novoArray);
        // .then((sucess) => {
        //     mensagem();
        // }).catch((err) => { console.log(err) })
        // setManyItens([].concat(frigItem.iten_id));
        // console.log(manyItens);
    }

    const addFrigItem = (id: any) => {
        const item = itens.find((item: any) => item?.id === id);
        const frigItem: IitemIntoFrig = {
            iten_id: [item?.id],
            frigobar_id:[ frigobar.id],
            quantidade: [quantidade]
        };
        console.log(frigItem)
        api.post('/frigobar_itens', frigItem);
    };
    const removeFrigItem = (id: any) => {
        getItensInFrigobar();
        const item = itens.find((item: any) => item?.id === id);
        const frigItem: IitemIntoFrig = {
            iten_id: item?.id,
            frigobar_id: frigobar.id
        };
        if (itensIntoFrig.length) {
            console.log('Não Está vazio')
            api.post('/deleteItemFromFrigobar', frigItem)
        }

        if (!itensIntoFrig.length) {
            window.alert("não há itens a seren removidos")
        }
    };


    // console.log(data)
    //     .then((response) => {
    //         // window.alert('Item cadastrado com sucesso')
    //     }).catch((err) => {
    //         window.alert(err);
    //     });
    // getItem()
    // setOpenModal(false as any)
    // reset();
    // };

    return (
        <>
            <div className=''>
                <div className="items-center flex justify-center">
                    <Button
                        className="
                    flex transition duration-300 
                    hover:bg-lime-900 col-span-1
                    bg-lime-700 uppercase border-none mt-2"

                        onClick={() => props.setOpenModal('form-elements')}>
                        Adicionar Itens
                    </Button>

                </div>
                <div className="">

                    <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                        <Modal.Header />
                        <Modal.Body>
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
                                    <div>
                                        <label className="uppercase p-2 pb-3 font-semibold">Opções:</label>
                                        <ul className="">
                                            {itens.map((itens: any, index: any) => (
                                                <li key={itens.id} className='flex flex-col-2 gap-4 mb-4'>
                                                    <p>{itens.nome}</p>

                                                    <div className='flex gap-2'>
                                                        <button onClick={() => addFrigItem(itens.id)}
                                                            className="hover:invert"
                                                        >
                                                            <FiPlusCircle />
                                                        </button>

                                                        <input
                                                            className='w-10 h-6 text-black' type="number"
                                                            value={quantidade[index]}
                                                            onChange={handleQuantidadeChange}
                                                            onBlur={() => setIdItem(itens.id)}
                                                        // onMouseLeave={adicionarAoArray}
                                                        />
                                                        <button onClick={() => removeFrigItem(itens.id)}
                                                            className="invert hover:invert-0">
                                                            <GrSubtractCircle />
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" onClick={adicionarAoArray}
                                                            onBlur={adicionarIdAoArray}
                                                            name="escolha" id="" />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="items-center flex justify-center">
                                            <div className='
                                        w-56 p-1 text-[12px] rounded
                                        bg-red-600 text-slate-50 indent-2
                                        flex items-center justify-center uppercase
                                        '>
                                                <h2>Itens adicionados:</h2>
                                                <ul>
                                                    {quantidadesAnteriores.map((q, index) => (
                                                        <li key={index}>{q}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <br />

                                        {/* <div>{itensIntoFrig. }</div> */}

                                    </div>
                                    <div className='flex flex-col-2 justify-around items-center p-2'>

                                        <button
                                            type='submit'
                                            onClick={adicionarAoArray}
                                            className='bg-blue-700 font-semibold
                                        hover:bg-blue-900 cursor-pointer p-2
                                        items-center flex rounded-2xl text-gray-200
                                        hover:text-gray-300 space-evenly
                                         shadow-black
                                        transition-transform transform 
                                        active:scale-95 py-2 px-2
                                        active:bg-[#000000] uppercase'
                                        ><MdAddCircle />

                                        </button>

                                        <button
                                            type='button'
                                            className='bg-red-700 font-semibold
                                        hover:bg-red-900 cursor-pointer p-2
                                        items-center flex rounded-2xl text-gray-200
                                        hover:text-gray-300 space-evenly
                                        shadow-black
                                        transition-transform transform 
                                        active:scale-95 py-2 px-2
                                        active:bg-[#000000] uppercase'>
                                            <BsTrashFill />

                                        </button>
                                    </div>
                                </form >
                            </div>
                        </Modal.Body >
                    </Modal >
                </div >
            </div>
        </>
    )
}


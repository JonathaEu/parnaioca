'use client';
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import cadastraItens from '@/functions/postItens';

type inputs = {
    // nome: string
    // valor: string
    quantity: number;
    itens: string
}

interface IitemIntoFrig {
    quantity: number
    item: inputs
}

export default function ItensIntoFrigobar({ getItem, index, frigobar, }: any) {
    const [selecoes, setSelecoes] = useState<string[]>([]);
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const [itens, setItens] = useState([]);
    const [itensIntoFrig, setItensIntoFrig] = useState<IitemIntoFrig[]>([]);
    const getItens = async () => {
        const response = await api.get('/itens');
        setItens(response.data.data);
        // console.log(response);
        // console.log(itens);
    };
    useEffect(() => {
        getItens();
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm()
    const onSubmit = (data: any) => {
        // Manipule os dados conforme necessário, neste caso, adicionando à lista de seleções
        console.log(data)
    };

    const addToFrig = (id: number) => {
        const item = itens.find((item: any) => item?.id === id);
        console.log(id)
        console.log(item)
        const alreadyInFrig = itensIntoFrig.find((itemFrig: any) => itemFrig?.item.id === id);

        if (alreadyInFrig) {
            const newItemIntoFrig: IitemIntoFrig[] = itensIntoFrig.map((item: any) => {
                if (item.id === id)
                    ({
                        alert: 'DANGEEEEEEEEEEEEEER',
                        ...item,
                        quantity: 0
                    });
                return item;
            });

            setItensIntoFrig(newItemIntoFrig);
            console.log('----------------------')
            console.log('Estou no If')
            console.log(newItemIntoFrig)
        };
        // SE o item ainda nao estiver no frigobar
        const frigItem: IitemIntoFrig = {
            item: item!,
            quantity: 1,
        };
        const newItemIntoFrig: IitemIntoFrig[] = [...itensIntoFrig, frigItem];
        setItensIntoFrig(newItemIntoFrig);
    };
    console.log(itensIntoFrig)
    const removeFromFrig = (id: number) => {
        const alreadyInFrig = itensIntoFrig.find(
            (item: any) => item?.id === id
        );
        if (alreadyInFrig!.quantity > 1) {
            const newItemIntoFrig: IitemIntoFrig[] = itensIntoFrig.map((item: any) => {
                if (item?.id === id)
                    ({
                        ...item,
                        quantity: item.quantity--,
                    });
                return item;
            })
            setItensIntoFrig(newItemIntoFrig);
            return;
        }

        const newItemIntoFrig: IitemIntoFrig[] = itensIntoFrig.filter(
            (item: any) => item.id !== id
        );
        setItensIntoFrig(newItemIntoFrig);
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
                <Button className=" p-2 bg-orange-500" onClick={() => props.setOpenModal('form-elements')}>Adicionar Itens ao Frigobar</Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Adicionar Itens</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className='text-slate-200 grid grid-cols-1 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4
    mt-14 px-5'>

                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center" />
                                </div>

                                <div>
                                    <label>Selecione as opções:</label>
                                    <ul>
                                        {itens.map((itens: any, index) => (
                                            <li className='flex flex-col-2 gap-10'>
                                                <p>{itens.nome}</p>
                                                <button onClick={() => addToFrig(itens.id)}
                                                    className='bg-blue-500 rounded-sm px-1 h-4 -pt-10'>+</button>
                                                <button onClick={() => removeFromFrig(itens.id)}
                                                    className='bg-red-500 rounded-sm px-1 h-4 -pt-10'>-</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col items-center p-2'>

                                    <button type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2
                                      active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150
                                      [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca]' >enviar</button>
                                </div>
                            </form >
                        </div>
                        <div>

                            <h2>Seleções:</h2>
                            <ul>
                                {selecoes.map((selecao, index) => (
                                    <li key={index}>{selecao}</li>
                                ))}
                            </ul>
                        </div>
                    </Modal.Body >
                </Modal >
            </div >
        </>
    )
}

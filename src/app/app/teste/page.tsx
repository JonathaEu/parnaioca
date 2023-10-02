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
    const [idItem, setIdItem] = useState([]);
    const [valor_total, setValor_total] = useState<number>();
    const [reservas_id, setReservas_id] = useState([]);
    const [idItemAnteriores, setIdItemAnteriores] = useState([]);
    const [quantidadesAnteriores, setQuantidadesAnteriores] = useState([]);

    // let quantidade = 0;
    const adicionarAoArray = () => {
        // Adicione o valor atual da quantidade ao array de quantidades anteriores
        setQuantidadesAnteriores((prevQuantidades): any => [...prevQuantidades, quantidade]);
    };
    const adicionarIdAoArray = () => {
        // Adicione o valor atual da quantidade ao array de quantidades anteriores
        setIdItemAnteriores((prevId): any => [...prevId, idItem]);
    };
    const handleQuantidadeChange = (e: any, index: any) => {

        setQuantidade(() => {

            const valor = e.target.value
            valor[index]
            return valor
        }
        )
        //     //     const novaQuantidade = Number(e.target.value);
        //     //     setQuantidade(novaQuantidade); // Atualize a quantidade atual
        console.log(quantidade)
    };
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
        getFrigobar();
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
        const frigItem: Inputs = {
            iten_id: item?.id,
            quantidade: quantidade,
            reservas_id: reservas_id,
            valor_total: valor_total,
        };
        console.log(frigItem)
        console.log(frigItem)
        // api.post('/frigobar_itens', frigItem);
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
                        <div>
                            <div className='flex gap-20 transition-transform mb-8 text-black p-2'>
                                <select onClick={(e: any) => setReservas_id(e.target.value)}>
                                    <option value=""></option>
                                    {reserva.map((reserva: any) => {

                                        return (
                                            <>
                                                <option value={reserva.id}>{reserva?.id}</option>
                                            </>
                                        );
                                    })}
                                </select>
                            </div>
                            <label className="uppercase p-2 pb-3 font-semibold">Opções:</label>
                            <ul className="">
                                {itens.map((itens: any, index: number) => (
                                    <li key={itens.id} className='flex flex-col-2 gap-4 mb-4 border border-cyan-100'>

                                        <div className='grid grid-cols-1 gap-2 justify-center'>
                                            <p>{itens.nome}</p>
                                            <p>quantidade</p>
                                            <input
                                                className='w-20 h-6 text-black' type="number"
                                                value={12}
                                                onChange={(e: any) => { handleQuantidadeChange(e), setIdItem(itens.id), setValor_total(itens.valor * e.target.value), setQuantidade(e.target.value) }}
                                            // onMouseLeave={adicionarAoArray}
                                            />
                                            {/* <input
                                                className='w-20 h-6 text-black' type="number"
                                                onChange={(e: any) => { handleQuantidadeChange(e), setIdItem(itens.id), setValor_total(itens.valor * e.target.value), setQuantidade(e.target.value) }}
                                            // onMouseLeave={adicionarAoArray}
                                            /> */}



                                            <div className='text-black'>
                                                <p>Valor do item</p>
                                                <input type="text" defaultValue={itens.valor} name="" id="" />
                                            </div>
                                            <div className='text-black'>
                                                <p>Valor Total</p>
                                                <input type="text" disabled value={itens.valor * quantidade}
                                                />
                                            </div>
                                            <div>
                                                <button type='button' className='bg-green-700 p-2 rounded-md' onClick={addFrigItem}
                                                    name="escolha" id="">Confirmar</button>
                                            </div>
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
                </div >
            </div >
        </>

    )
}



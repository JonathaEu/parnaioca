'use client'
import api from '@/services/api';
import React, { useState, useEffect } from 'react';
import SideBarFuncionario from '../components/SideBarFuncionario';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { compareAsc, format } from 'date-fns'
import pagamentoAvatar from '../../../../public/assets/PagamentoAvatar.png'
import { GiDividedSquare } from 'react-icons/gi';
import pagamentoHeader from '../../../../public/assets/PagamentoHeader.png';
import BuscarClienteSearch from '@/functions/get-clientes-search';
import getPendencias from '@/functions/getPendencias';
import RegisterPagamento from '@/app/modals/RegisterPagamento';

function Pagamento() {

    const [selectedOption, setSelectedOption] = useState<any>({});
    const [clientes, setClientes] = useState([]);
    const [reservas_id, setReservas_id] = useState<number>();
    const [pagamento, setPagamento] = useState([]);
    const [pendencia, setPendencia] = useState([]);
    const [pagamentoBool, setPagamentoBool] = useState([]);
    const [consumo, setConsumo] = useState([]);


    const confirmaCliente = () => {
        const clientes_id = {
            "clientes_id": selectedOption.value
        };
        api.post('/showConsumo', clientes_id)
            .then((response: any) => {
                console.log(response)
                setConsumo(response.data.data)
            });
        getPendencias(clientes_id)
            .then((response: any) => {
                console.log(response)
                setPendencia(response.pendencia)
                setPagamentoBool(response.pagou_bool)
                setReservas_id(response.reservas_id)
            })
    }

    useEffect(() => {
        BuscarClienteSearch()
            .then((response: any) => {
                setClientes(response.listaClientes)
            }).catch((err: any) => {
                console.log(err);
            });

    }, [])

    const pagBoolTrue = `line-through text-green-600 font-bold
    outline-4 outline-black justify-start flex self-center`;

    const pagBoolFalse = `text-red-700 text-center font-bold
     outline-4 outline-black justify-start flex self-center`

    let pagBoolStyle = pagamentoBool ? pagBoolTrue : pagBoolFalse;
    // function checkPagamento() {
    //     if (pagamentoBool[0] == 1) {
    //         return <h1>Pago</h1>
    //     }
    // }
    return (
        <>
            <SideBarFuncionario>
                <div className="w-full h-full bg-[#d0d0d0] ">

                    <header
                        className='
                    items-center justify-center
                    flex shadow-lg bg-white
                    p-4
                    '>
                        <img
                            src={pagamentoHeader.src}
                            alt="pagamentoHeader"
                            className="w-44"
                        />
                    </header>


                    <div className="flex items-center justify-center mt-10">
                        <div
                            className="
                         bg-white/60
                        rounded-x shadow-lg
                        rounded-md shadow-slate-400
                       "
                        >
                            <div className="items-center flex justify-center">
                                <img src={pagamentoAvatar.src} alt="pagamento"
                                    className="pl-17 w-44 pt-3" />
                            </div>
                            <div className="p-0 pl-14 items-center content-center flex">


                                <label htmlFor="clienteNome" className="font-semibold p-2 ">Clientes: </label>

                            </div>

                            <div className=" pl-14 items-center content-center flex space-between">
                                <Select
                                    value={selectedOption}
                                    options={clientes}
                                    isSearchable={true}
                                    onChange={(selectedValue) => {
                                        setSelectedOption(selectedValue);
                                    }}
                                    className='w-48'
                                />
                                <button className='bg-slate-800 ml-5 p-2 rounded-md text-white'
                                    onClick={() => {
                                        confirmaCliente()
                                        // checkPagamento()
                                    }}
                                >
                                    Confirmar</button>

                            </div>


                            <div className=''>
                                <h2 className='font-bold text-center mb-8 mt-8'>
                                    Consumos registrados para: {selectedOption.label}
                                </h2>
                                {consumo && consumo.map((consumos: any) => {
                                    return (
                                        <div>
                                            <ul className='grid grid-cols-2 font-semibold p-4 border-b-2 border-black mx-2'>
                                                <li>
                                                    Produto: {consumos.nome}
                                                </li>
                                                <li>
                                                    Quantidade: {consumos.quantidade}
                                                </li>
                                                <li>
                                                    Valor: R$ {consumos.valor_total}
                                                </li>
                                                <li>
                                                    Data e Horário:{format(new Date(consumos.created_at), 'dd/MM/yyyy - HH:mm:ss')}
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })}
                                <div className='grid grid-cols-2 text-center'>
                                    <h2 className='font-bold  mb-8 mt-8'>
                                        Pendências:
                                    </h2>
                                    <h2 className={`${pagBoolStyle}`}>
                                        R$: {pendencia}
                                    </h2>
                                </div>

                                <div>
                                    <RegisterPagamento id_da_reserva={reservas_id} debito={pendencia} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </SideBarFuncionario>
        </>
    );
}

export default Pagamento;
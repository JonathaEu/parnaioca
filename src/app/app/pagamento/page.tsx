'use client'
import api from '@/services/api';
import React, { useState, useEffect } from 'react';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useForm } from 'react-hook-form';
import pagamento from '../../../../public/assets/pagamento.png'
import { GiDividedSquare } from 'react-icons/gi';


function Pagamento() {
    const [reserva, setReserva] = useState([]);

    const { register, handleSubmit } = useForm({
        mode: 'all'
    });

    const handleSubmitData = (data: any) => {
        console.log('submit', data);
    };

    useEffect(() => {
        const getReserva = async () => {
            const response = await api.get('/reserva_rel');
            console.log(response)
            setReserva(response.data)

        };
        getReserva();
    }, []);


        return (

            <>
                <SideBarFuncionario>

                    <div className="flex items-center content-center justify-center h-screen w-full bg-slate-200">
                        <div>
                            <div className="backdrop-blur-sm bg-white/30 rounded-x shadow-lg bg-[#859199] rounded-md shadow-slate-500" >

                                <img src={pagamento.src} alt="pagamento" className="pl-17 w-[600px] h-full pt-3" />

                                <div className="p-10 pl-14 items-center content-center flex">


                                    <label htmlFor="clienteNome" className="font-semibold p-2 ">Clientes: </label>

                                    <ul>
                                        {
                                            reserva && reserva.length > 0 ? (
                                                reserva.map((reserva) => (
                                                    <li key={reserva.id}>
                                                        {reserva.clientes?.nome}
                                                    </li>
                                                ))

                                            ) : (
                                                ' '
                                            )
                                        }
                                    </ul>
                                    <form onSubmit={handleSubmit(handleSubmitData)} id="meuFormulario">

                                        <input id='1' type='text' {...register('buscarClientes')} placeholder='Procurar' className="w-80 pt-[0.8%] pb-[0.8%] border border-gray-300 rounded" />
                                        <button type='submit' className="ml-2 bg-gray-700 pl-4 pr-4 pt-1 pb-1 text-white rounded hover:bg-gray-900">enviar</button>
                                    </form>
                                </div>

                                <div className=" pl-14 items-center content-center flex space-between">

                                </div>


                                <div>
                                    <h2 className="items-center content-center flex justify-center font-semibold">
                                        Produtos consumidos por <h2 className="text-bold text-red-900">{reserva?.clientes?.nome}</h2>:

                                    </h2>
                                    <br />
                                    <table>
                                        <thead className="flex ml-44 space-x-36 pr-36 items-center content-center justify-center">
                                            <th>Produtos:</th>
                                            <tr>
                                                <th>Valor:</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {reserva && reserva.length > 0 ? (
                                                reserva.map((consumo: any, index: any) => (
                                                    <tr key={consumo.id}>
                                                        <td>{consumo?.consumo?.items_id}</td>
                                                        <td>R$ {consumo?.consumo?.valor_total}</td>

                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="2"></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <h1 className="font-bold items-center content-center justify-center flex p-20">Total: <h2 className=" pl-2 font-bold text-red-900">R$</h2> {reserva?.consumo?.consumo?.items_id?.valor_total}</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </SideBarFuncionario >
            </>
        );
    }

    export default Pagamento;
'use client'
import React from 'react'
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useStateContext } from '@/context/AuthProvider';
import RegisterReservaModal from '@/app/modals/registerReservas';
import reservasHeader from '../../../../public/assets/reservasHeader.png'
import EditReservaModal from '@/app/modals/editarReserva';
import CheckButton from '../components/CheckButton';


export default function Reserva() {

    const [reserva, setReserva] = useState([]);

    useEffect(() => {
        const getReserva = async () => {
            const response = await api.get('/reserva_rel')
            setReserva(response.data.data);
            console.log(response.data);
            console.log(response);

        };
        getReserva();
    }, []);


    const [quarto, setQuarto] = useState([]);
    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/quarto');
            setQuarto(response.data.data);
            // console.log(response.data.data);
        };
        getQuarto();
    }, []);

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        const getClientes = async () => {
            const response = await api.get('/cliente');
            setClientes(response.data.data);
            console.log(response);
        };
        getClientes();
    }, []);

    const [funcionario, setFuncionario] = useState([]);
    useEffect(() => {
        const getFuncionario = async () => {
            const response = await api.get('/me');
            setFuncionario(response.data);
            console.log(response)
            console.log(funcionario)
        };
        getFuncionario();
    }, []);



    return (
        <>
            <SideBarFuncionario>
                <div className="w-full h-screen bg-[#DCDCDC]">
                    <header className="flex">
                        <div className="bg-white p-4 m-0 flex shadow-lg w-full justify-center items-center h-auto">
                            <img src={reservasHeader.src} alt="reservasHeader" className="w-24" />
                        </div>
                    </header>


                    <div className='ml-20 px-10'>
                        <RegisterReservaModal
                            quarto={quarto}
                            clientes={clientes}
                            funcionario={funcionario}

                        />
                        <table className=" w-full text-sm text-left text-white">
                            <thead className="text-xs text-white0 uppercase bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Cliente hospedado:
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Está no quarto:
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Status:
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>

                                </tr>
                            </thead>


                            <tbody className=''>
                                {reserva.map((reservas: any, index) => {

                                    return (
                                        <>
                                            <tr key={reservas.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                <td className='py-4 px-6 indent-[20%]'>
                                                    {reservas.clientes?.nome}

                                                </td>
                                                <td className='py-4 px-6'>
                                                    {reservas.quartos?.nome}
                                                </td>

                                                <td className={``}>
                                                    {reservas.status}
                                                </td>
<td>
                                                <CheckButton id={reservas.id} />
                                              </td>

                                                <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>
                                                    <EditReservaModal
                                                        quarto={quarto}
                                                        clientes={clientes}
                                                        funcionario={funcionario}
                                                        id={reservas.id}
                                                    />
                                                </td>

                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </SideBarFuncionario>
        </>

    )
}

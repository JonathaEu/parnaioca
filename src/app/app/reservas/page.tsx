'use client'
import React from 'react'
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useStateContext } from '@/context/AuthProvider';
import RegisterReservaModal from '@/app/modals/resisterReservas';
import reservasHeader from '../../../../public/assets/reservasHeader.png'
import EditReservaModal from '@/app/modals/editarReserva';

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
                        <RegisterReservaModal />
                        <table className="w-full text-sm text-left text-white">
                            <thead className="text-xs text-white0 uppercase bg-gray-50 dark:bg-gray-700 w-full">
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
                                {reserva.map((reserva: any, index) => {

                                    return (
                                        <>
                                            <tr key={reserva.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                <td className='py-4 px-6 indent-[20%]'>
                                                    {reserva.clientes?.nome}

                                                </td>
                                                <td className='py-4 px-6'>
                                                    {reserva.quartos?.nome}
                                                </td>

                                                <td className={``}>
                                                    {reserva.status}
                                                </td>


                                                <td className={``}>
                                                    {reserva.check_out}
                                                </td>


                                                <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>
                                                    <EditReservaModal />
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

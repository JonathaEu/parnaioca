'use client'
import React from 'react'
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '@/services/api';
import SideBarFuncionario from '../components/SideBarFuncionario';
import { useStateContext } from '@/context/AuthProvider';
import RegisterReservaModal from '@/app/modals/resisterReservas';

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
                <div className='w-full px-10'>
                    <RegisterReservaModal />
                    <table className="w-full text-sm text-left text-white dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Cliente hospedado:
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Está no quarto:
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    check in:
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    check out:
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
                                                {reserva.check_in}
                                            </td>


                                            <td className={``}>
                                                {reserva.check_out}
                                            </td>


                                            <td className='flex justify-end gap-4 mt-2 mb-2 pb-0.5 mr-3'>

                                                <button className='bg-purple-100 text-purple-800 text-sm font-medium mr-2 rounded dark:bg-purple-900 dark:text-purple-300 p-2 border border-purple-400'>editar</button>
                                                <button className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400'>excluir</button>
                                            </td>

                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </SideBarFuncionario>
        </>

    )
}

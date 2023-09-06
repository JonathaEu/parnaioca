"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '@/app/app/components/Sidebar'
import RegisterItensModal from '@/app/modals/RegisterItens'
import api from '@/services/api';
import EditItensModal from '@/app/modals/editItens'

export default function Itens() {
    const [item, setItem] = useState([]);
    const getItem = async () => {
        const response = await api.get('/itens');
        setItem(response.data.data);
        console.log(response);
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <>
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen">
                    <section className="flex flex-wrap content-between ">

                        <RegisterItensModal getItem={getItem}></RegisterItensModal>
                        <div className='w-full px-10'>
                            <table className="w-full text-sm text-left text-white dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Item:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Valor atual:
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Quantidade:
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>


                                <tbody className=''>
                                    {item.map((item: any, index) => {

                                        return (
                                            <>
                                                <tr key={item.id} className=' bg-cyan-800 border-b dark:bg-gray-900 dark:text-white'>
                                                    <td className='py-4 px-6 indent-[20%]'>
                                                        {item.nome}
                                                    </td>
                                                    <td className='py-4 px-6'>
                                                        <p>R$: {item?.valor}</p>
                                                    </td>
                                                    <td className={`indent-[35%] `}>
                                                        <div className={` w-full rounded-md h-full mr-2 px-2.5 py-0.5 `}>
                                                            {item?.quantidade}
                                                        </div>
                                                    </td>
                                                    <td className='flex justify-end gap-10 mt-2 mb-2 pb-0.5 mr-3'>
                                                        <EditItensModal getItem={getItem} key={item.id} index={index} item={item} />
                                                        <button className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400'>excluir</button>
                                                    </td>

                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </section>
                </div>
            </Sidebar>
        </>
    )
}

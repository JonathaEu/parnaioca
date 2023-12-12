import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import BuscarClienteEspecifico from '@/functions/get-clientes-specify';
export default function BarraDePesquisa({ listaClientes, setCliente }: any) {
    const [selectedOption, setSelectedOption] = useState<any>({});
    const [selectedId, setSelectedId] = useState<any>({});


    return (
        <>
            <div className='flex justify-end'>
                <Select
                    value={selectedOption}
                    options={listaClientes}
                    isSearchable={true}
                    onChange={(selectedValue) => {
                        setSelectedOption(selectedValue);
                        setSelectedId(selectedValue.value);
                    }}
                    className='w-48'
                />
                <button onClick={() => {
                    BuscarClienteEspecifico(selectedId)
                        .then((response: any) => {
                            setCliente(response.data)
                            console.log(response)
                        })
                }}><ImSearch /></button>
            </div>
        </>
    )
}

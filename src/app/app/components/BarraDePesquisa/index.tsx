import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
export default function BarraDePesquisa({ searchElements }: any) {
    const [selectedOption, setSelectedOption] = useState<any>({});


    return (
        <>
            <div className='flex justify-end'>
                <Select
                    value={selectedOption}
                    options={searchElements}
                    isSearchable={true}
                    onChange={(selectedValue) => {
                        setSelectedOption(selectedValue);
                    }}
                    className='w-48'
                />
                <button><ImSearch /></button>
            </div>
        </>
    )
}

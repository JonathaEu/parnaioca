'use client'
import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import axios from "axios";

const searchBar = ({ onSearch }: any) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = async (event: any) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);

        try {
            const response = await axios.get('/clientes');
            const clientes = response.data;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    return (
        <div className="items-center flex justify-center w-full">
            <input
                type="text"
                placeholder="Pesquisar..."
                // value={searchTerm}
                onChange={handleChange}
                className="
                p-1 border rounded-full
              border-gray-800 text-gray-900
              hover:text-gray-900
              focus:text-white w-[100%] focus:bg-[#374151]"
            />
            <button className="rounded-full ml-2 p-2 bg-[#8AC43D] hover:text-white
            hover:bg-[#729d3a] hover:transition-all active:bg-[#0b170c] active:scale-75 active:text-[#c4c4c4]">
                <BiSearchAlt size={22}/>
            </button>
        </div>
    );
};

export default searchBar;
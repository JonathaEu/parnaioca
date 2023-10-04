import React, { useRef, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';
import Select from 'react-select';

const SearchBar = ({ onSearch }:any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);

  const handleChange = async (event:any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    try {
      const response = await axios.get('/clientes');
      const clientes = response.data;
      const formattedOptions = clientes.map((cliente:any) => ({
        value: cliente.id,
        label: cliente.nome,
      }));
      setOptions(formattedOptions);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

      // const handleChange = async (event: any) => {
    //     const searchTerm = event.target.value;
    //     onSearch(searchTerm);

    //     try {
    //         const response = await axios.get('/clientes');
    //         const clientes = response.data;
    //     } catch (error) {
    //         console.error('Erro ao buscar clientes:', error);
    //     }
    // };

    // const handleOptionClick = (option: any) => {
    //     setValue(option);
    //     setSearchTerm(option);
    //     setOptions([]);
    // };

    const fakeCustomers = [
        { value: '78', label: 'Chocolate' },
        { value: '12', label: 'Strawberry' },
        { value: '1', label: 'Vanilla' }
    ];



  const handleOptionClick = (option:any) => {
    setSearchTerm(option.label);
    setOptions([]);
  };

  return (
    <div className="items-center flex justify-center w-full">
      <Select
        className="basic-single"
        classNamePrefix="select"
        value={{ value: searchTerm, label: searchTerm }}
        onChange={fakeCustomers}
        onInputChange={fakeCustomers[0]}
        options={options}
      />
      <button
        onClick={() => onSearch(fakeCustomers)}
        className="rounded-full ml-2 p-2 bg-[#8AC43D] hover:text-white
            hover:bg-[#729d3a] hover:transition-all active:bg-[#0b170c] active:scale-75 active:text-[#c4c4c4]"
      >
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};

export default SearchBar;
import React, { useEffect, useState } from 'react';
import listaItens from '../../../../public/assets/itensVisualizar.png';
import SearchBar from '@/app/app/components/searchBar';

const FrigobarModal = ({ items, onClose }) => {
    const [frigobarItems, setFrigobarItems] = useState([]);
    // const frigobarItemss = ['Item 1', 'Item 2', 'Item 3'];


    useEffect(() => {
        async function fetchFrigobarItems() {
            try {
                const response = await fetch('/armazenamento');
                const data = await response.json();
                setFrigobarItems(data);
            } catch (error) {
                console.error('Erro ao buscar item no frigobar', error)
            }
        }
        fetchFrigobarItems();
        []
    })


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-blur-sm bg-opacity-60">
            <div className="bg-[#374151] p-2 w-[70%] rounded-lg  ml-1 mr-1">
                <button className="text-black absolute top-2 right-2 hover:bg-[#374151] hover:text-white hover:rounded-full
                hover:text-bold p-2"
                    onClick={onClose}>
                    x
                </button>
                <div className="flex items-center justify-center bg-[#cccaca] rounded-lg w-full">
                    <img src={listaItens.src} alt="Lista de itens"
                        className="w-72 p-3" />
                </div>
                <br />
                <br />
                <SearchBar/>
                <ul>
                    {frigobarItems.map((item, index) => (
                        <li
                        className="text-white flex justify-evenly items-center" 
                        key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FrigobarModal;
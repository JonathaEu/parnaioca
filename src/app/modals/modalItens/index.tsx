'use client'
import React from "react";
import { useState, useEffect } from 'react';
import api from '@/services/api'
import FormElements from '@/app/modals/RegisterFrigobar'
import ItensIntoFrigobar from '@/app/modals/ItensIntoFrigobar'
import headerFrigobar from '../../../../public/assets/frigobar.png'

type Inputs = {
    itens_id: number
    numero: number
    ativo: number
    frigobar_id: number
}


const ModalItens = ({ isOpen, closeModal, frigobarId, frigobarItens }: any) => {
    const [frigobar, setFrigobar] = useState([]);
    const getFrigobar = async () => {
        const response = await api.get('/frigobar_quarto');
        setFrigobar(response.data);
        console.log(response);
    };

    useEffect(() => {
        getFrigobar();
    }, []);
    const [itens, setItens] = useState([]);
    const getItem = async () => {
        const response = await api.get('/itens');
        setItens(response.data);
        console.log(response);
    };
    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}></span>
                <h2>{frigobarId}</h2>
                <ul>
                    {frigobarItens.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ModalItens;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/services/api';
import MesMaisLucrativo from '../GraficoReceita';




const lucroTotal = ({ dados, lucroGeralAno }: any) => {
    const [lucro, setLucro] = useState([]);
    const valorMaisAlto = Math.max(...dados);
    const posicaoDoValorMaisAlto = dados.indexOf(valorMaisAlto)


    const meses =
        [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

    const melhorMes = meses[posicaoDoValorMaisAlto];
    // const melhorMes = meses.findIndex(posicaoMaisAlta(posicaoDoValorMaisAlto))

    useEffect(() => {
        console.log(dados)
    }, [])

    const currentDate = new Date();
    const anoAtual = currentDate.getFullYear();


    return (
        <>
            <div
                className="
            flex items-center 
            justify-evenly uppercase
            text-[13px]
            ">

                <div>
                    <span className="font-bold">
                        Melhor mês
                    </span>
                    <div className="
                    bg-blue-600 text-white
                    flex justify-center items-center
                    p-2 rounded-[5px] mt-2
                    ">
                        {melhorMes}
                    </div>
                </div>

                <div>
                    <span className="font-bold">
                        Lucro geral do ano:
                        <span className="pl-1 text-red-600">
                            {anoAtual}
                        </span>
                    </span>
                    <div className="bg-blue-600 text-white
                    flex justify-center mt-2 items-center
                    p-2 rounded-[5px]
                    
                    ">
                        <span>R$ </span> {lucroGeralAno}

                    </div>
                </div>


                <div>
                    <span className="font-bold">
                        Receita da empresa
                    </span>
                    <div className="
                    bg-blue-600 mt-2 text-white
                    flex justify-center items-center
                    p-2 rounded-[5px]
                    ">
                        TESTE
                    </div>
                </div>
            </div>
        </>
    )
}

export default lucroTotal;
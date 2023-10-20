'use client';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import api from "@/services/api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import getPorcentagem from '@/functions/getPorcentagem';
import getMaisRentavel from '@/functions/getMaisRentavel';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);


const GraficoQuartoMaisRentaveis = (porcentagem: any) => {
    const [quartosMaisFrequentes, setQuartosMaisFrequentes] = useState([]);
    const porcentagens = porcentagem.porcentagem;


    useEffect(() => {
         getMaisRentavel()
            .then((response: any) => {
                setQuartosMaisFrequentes(response.quartoMaisFrequente);
            })
    }, [])


    const data = {
        labels: quartosMaisFrequentes,
        datasets: [
            {
                label: 'Porcentagens %',
                data: porcentagens,
                borderColor: [
                    'rgba(255, 255, 255, 1.0)'
                ],
                backgroundColor: [
                    '#4682B4',
                    '#66CDAA',
                    '#8FBC8F',
                    '#7B68EE',
                    '#008080',
                    '#191970',
                ]
            },
        ],
    };


    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            scales: {
                x: {
                    beginAtZero: true,
                },
            },
        });
    }, []);


    return (
        <div>
            <Doughnut
                data={data}
            />
        </div>
    )
}

export default GraficoQuartoMaisRentaveis;



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
        console.log(porcentagem);
        getMaisRentavel()
            .then((response: any) => {
                setQuartosMaisFrequentes(response.quartoMaisFrequente);
            })
        console.log(porcentagem);
    }, [])


    const data = {
        labels: quartosMaisFrequentes,
        datasets: [
            {
                label: 'Porcentagens %',
                data: porcentagens,
                borderColor: [
                    'rgba(0, 0, 255, 1.0)',
                    'rgba(65, 105, 225, 1.0)',
                    'rgba(0, 0, 139, 1.0)',
                    'rgba(173, 216, 230, 1.0)',
                    'rgba(175, 238, 238, 1.0)',
                    'rgba(135, 206, 235, 1.0)',
                ],
                backgroundColor: [
                    'rgba(0, 0, 255, 1.0)',
                    'rgba(65, 105, 225, 1.0)',
                    'rgba(0, 0, 139, 1.0)',
                    'rgba(173, 216, 230, 1.0)',
                    'rgba(175, 238, 238, 1.0)',
                    'rgba(135, 206, 235, 1.0)',
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



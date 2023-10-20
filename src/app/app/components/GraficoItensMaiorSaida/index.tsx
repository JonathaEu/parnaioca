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
import getItensMaisSaidas from '@/functions/getItensMaisSaidas';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

const GraficoItensMaisRentaveis = (itemMaiorSaida: any) => {
    const [itensMaiorSaida, setItensMaiorSaida] = useState([]);
    const items = ['fanta', 'coca', 'pepsi', 'grapetti', 'brahma', 'vinho tinto']
    const porcentagem = [25, 30, 20, 10, 10, 5]

    // let porcentagem: [];
    const [porcentagemItem, setPorcentagemItem] = useState([]);
    useEffect(() => {
        // getItensMaisSaidas()
        //     .then((response: any) => {
        //         setItensMaiorSaida(response.ItemMaisFrequente);
        //         setPorcentagemItem(itemMaiorSaida.itemMaiorSaida)
        //     })
        // console.log(itemMaiorSaida)

    }, [])


    const data = {
        labels: items,
        //  itensMaiorSaida,
        datasets: [
            {
                label: 'Porcentagens %',
                data: porcentagem,
                // porcentagemItem,
                borderColor: [
                    'rgba(255, 255, 255, 1.0)'
                ],
                backgroundColor: [
                    '#83BC4A',
                    '#9FC842',
                    '#EBE318',
                    '#F08628',
                    '#C62A30',
                    '#722A36',
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

export default GraficoItensMaisRentaveis;



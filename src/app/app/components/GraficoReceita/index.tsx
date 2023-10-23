import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
        },
    },
};

const labels =
    [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez'
    ];

const GraficoReceita = ({ dadosParaGrafico }: any) => {

    const data = {
        labels,
        datasets: [
            {
                label: 'Barra de Lucro',
                data: dadosParaGrafico,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: dadosParaGrafico.map((profit: any) => {
                    if (profit <= 300) {
                        return '#E99E9E';
                    } else {
                        return '#6FBE8B';
                    }
                }),
            },
        ],
    };

    return (
        <div>
            <Bar options={options} data={data} />

            {/* {data.map((lucro)=> (
                <div key={lucro}>
                    <p></p>
                </div>
            ))} */}
        </div>
    )
}

export default GraficoReceita;
import { Doughnut } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import api from '@/services/api';
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
import getMaisRentavel from '@/functions/getMaisRentavel';
import getPorcentagem from '@/functions/getPorcentagem';
import GraficoQuartoMaisRentaveis from '../GraficoQuartoMaisRentaveis';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const GraficoQuartoMenosRentaveis = (maisRentavel: any) => {
    const [porcentagem, setPorcentagem] = useState([]);
    const [quartosMaisFrequentes, setQuartosMaisFrequentes] = useState([]);

    //   const [quartosMenosFrequentes, setQuartosMenosFrequentes] = useState([]);
    //   const porcentagens = porcentagem.porcentagem;

    useEffect(() => {
        getPorcentagem().then((response: any) => {
            setPorcentagem(response.porcentagens)
        })
        // console.log(porcentagemReverse);
        // getMaisRentavel().then((response: any) => {
        //   setQuartosMenosFrequentes(response.quartoMaisFrequente);
        // });
        // console.log(porcentagem);
    }, []);


    useEffect(() => {
        // console.log(porcentagem);
        getMaisRentavel()
            .then((response: any) => {
                setQuartosMaisFrequentes(response.quartoMaisFrequente);
            })
        // console.log(porcentagem);
    }, [])


    useEffect(() => {
        if (porcentagem.length >= 1) {
            // console.log(porcentagem);
            const porcentagemReverse = porcentagem.reverse();
            // console.log(porcentagemReverse);
        }
    }, [porcentagem]);

    const data = {
        labels: quartosMaisFrequentes,
        datasets: [
            {
                label: 'Porcentagens %',
                data: porcentagem,
                borderColor: [
                    'rgba(255,69,0)',
                    'rgba(255,140,0)',
                    'rgba(255,215,0)',
                    'rgba(255,255,0)',
                    'rgba(240,230,140)',
                    'rgba(255, 255, 0, 1.0)',
                ],
                backgroundColor: [
                    'rgba(255,69,0)',
                    'rgba(255,140,0)',
                    'rgba(255,215,0)',
                    'rgba(255,255,0)',
                    'rgba(240,230,140)',
                    'rgba(255, 255, 0, 1.0)',
                ],
            },
        ],
    };
    // const data = []

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
    );
};

export default GraficoQuartoMenosRentaveis;

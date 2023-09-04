'use client'
import api from '@/services/api';
import React, { useState, useEffect } from 'react';
import SideBarFuncionario from '../components/SideBarFuncionario';


function Pagamento() {
    const [reserva, setReserva] = useState([]);

    useEffect(() => {
        const getReserva = async () => {
            const response = await api.get('/reserva_rel');
            console.log(response)
            setReserva(response.data)

        };
        getReserva();
    }, []);

    return (
        <>
            <SideBarFuncionario>
                <div className="flex h-screen justify-center items-start">
                    <h1 className="ml-4 p-8 w-full font-bold text-[28px]">PAGAMENTO</h1>
                </div>



                <div className="flex content-center items-center backdrop-blur-sm bg-white/30 w-[60%] rounded-x shadow-lg bg-[#adbac2] shadow-black mx-auto p-4
      mt-20 px-10 " >
                    <div>
                        <label htmlFor="clienteNome">Clientes</label>
                        <ul>
                            {
                                reserva && reserva.length > 0 ? (
                                    reserva.map((reserva) => (
                                        <li key={reserva.id}>
                                            {reserva.clientes?.nome}
                                        </li>
                                    ))

                                    ) : (
                                        'Vazio'
                                )
                            }
                        </ul>
                        <form>
                            <input>Procurar</input>
                           <button onClick={reserva}>enviar</button>
                        </form>
                    </div>


                    <div>
                        <h2>
                            Produtos Consumidos por {reserva?.clientes?.nome}:
                        </h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produtos:</th>
                                    <th>Valor:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reserva && reserva.length > 0 ? (
                                    reserva.map((consumo, index) => (
                                        <tr key={consumo.id}>
                                            <td>{consumo?.consumo?.items_id}</td>
                                            <td>R$ {consumo?.consumo?.valor_total}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">Nenhum item disponível</td>                                  </tr>
                                )}
                            </tbody>
                        </table>
                        <h2>Total: R$ {reserva?.consumo?.consumo?.items_id?.valor_total}</h2>
                    </div>
                </div>
            </SideBarFuncionario>
        </>
    );
}

export default Pagamento;
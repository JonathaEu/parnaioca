'use client'
import { useStateContext } from "@/context/AuthProvider";
import logout from "@/functions/logout";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { Children } from "react";
import SideBarFuncionario from "../components/SideBarFuncionario";

import api from "@/services/api";
import { useEffect, useState } from "react";

type Clientes = {
    // id: number;
    quarto: string;
    nome: string;
    data_inicio: string;
    data_fim: string;
}

export default function dashboard() {

    const router = useRouter();
    const { user } = useStateContext();
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const getClientes = async () => {
            const apiClientes = await api.get('/cliente');
            // setClientes(apiClientes.data.data);
            console.log(apiClientes);
        };
        getClientes();
    }, []);
    console.log(clientes);

    return (
        <>
            <SideBarFuncionario>
                <div className="h-screen">
                    <div className="">
                        <div className="flex justify-center items-center bg-black p-2 text-white">
                            <h2 className="text-sm">Bem-vindo <b>{user?.name}</b>, o que deseja fazer?</h2>
                        </div>

                        <div className="flex items-center text-center">
                            <h1 className="ml-4 w-full font-semibold text-[28px]">Dashboard</h1>
                        </div>
                        <div className="bg-white border-t-[1px] rounded-lg pb-6 grid grid-cols-2 -mt-10 pt-16 gap-4 text-center">

                            {/* Lista itens com maior saida */}
                            {/* Lista itens com maior saida */}
                            <div className=" flex mt-[80px] shadow-2xl  rounded-lg h-[200px]">
                                <table className="-mb-36">
                                    <tbody>
                                        <tr className=" relative bottom-20">
                                            <th className="w-screen">Item com maior saída:</th>
                                        </tr>

                                        <tr className=" relative bottom-32">
                                            <td>Fanta</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex mt-[80px] shadow-2xl  rounded-lg h-[200px]">
                                <table className="-mb-36">
                                    <tbody>
                                        <tr className=" relative bottom-20">
                                            <th className="w-screen">Quarto mais rentável:</th>
                                        </tr>
                                        <tr className=" relative bottom-32">
                                            <td>Suite03</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* {FIM DA GRID} */}
                        {/* Lista Clientes Hospedados */}
                        <div className="mt-10 border-t-2 rounded-lg">
                            <h2 className="flex justify-center w-screen text-center">Clientes hospedados atualmente</h2>
                            <div className=" flex mt-[80px] shadow-xl  rounded-lg  border-red-400">
                                <table className="-mb-36">
                                    <tbody>
                                        <tr className=" relative bottom-20">
                                            <th className="w-screen">Quarto</th>
                                            <th className="w-screen">Pessoa</th>
                                            <th className="w-screen">Data Inicial</th>
                                            <th className="w-screen">Data Final</th>
                                        </tr>
                                        <tr className="text-center relative bottom-10">
                                            <td>Junim</td>
                                            <td>Pedrin</td>
                                            <td>Pedrin</td>
                                            <td>Pedrin</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </SideBarFuncionario>
        </>
    )
}

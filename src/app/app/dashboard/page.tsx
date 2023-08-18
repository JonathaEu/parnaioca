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
//     const router = useRouter();
//     const { user } = useStateContext();

//     const RouteCadastroCliente = () => { router.push('/app/cliente/cadastro') }
//     const RouteCadastroItens = () => { router.push('/app/cliente/cadastro') }
//     const RouteRealizarReserva = () => { router.push('/app/reservas') }
//     const RouteCadastroFrigobar = () => { router.push('/app/frigobar') }
//     const RouteCadastroQuarto = () => { router.push('/app/quarto') }
//     const RouteCadastroTipoQuarto = () => { router.push('/app/quartoCategory') }
//     const RouteCadastroEstacionamento = () => { router.push('/app/estacionamento') }
//     const CheckInButton = () => { router.push('/app/cliente/cadastro') }
//     const CheckOutButton = () => { router.push('/app/cliente/cadastro') }

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
//     return (
//         <>
//             <div className="font-medium border border-cyan-400 p-10 
//             ">
//                 <ul className="absolute right-28">
//                     <li>{user?.name}
//                     </li>
//                 </ul>
//                 <div className=" absolute right-10  p-2 bg-red-500 rounded-md">
//                     <button type="button" onClick={logout}>Sair</button>
//                 </div>
//             </div>
//             <div className="flex justify-center items-center mt-2">
//                 <h2 className="">Bem-vindo {user?.name}, o que deseja fazer?</h2>
//             </div>

//             <div className=" shadow-2xl mx-2 border-b-2 border-l-2 border-r-2 rounded-lg">
//                 <div className="mx-10 grid grid-cols-4 gap-4 justify-between px-2 mt-4 py-4 text-sm ">
//                     <button type="button" onClick={RouteCadastroCliente}
//                         className="bg-cyan-600 rounded-md text-white p-[10px]">
//                         Cadastrar Cliente
//                     </button>

//                     <button type="button" onClick={RouteRealizarReserva}
//                         className="bg-cyan-600 rounded-md text-white ">
//                         Realizar Reserva
//                     </button>
//                     <button type="button" onClick={RouteCadastroQuarto}
//                         className="bg-cyan-600 rounded-md text-white ">
//                         Cadastrar Quarto
//                     </button>

//                     <button type="button" className="bg-cyan-600 rounded-md text-white ">
//                         Cadastrar itens para o frigobar
//                     </button>

//                     <button type="button" className="bg-cyan-600 rounded-md text-white ">
//                         Cadastrar Frigobar Para Quarto
//                     </button>

//                     <button type="button" className="bg-cyan-600 rounded-md text-white">
//                         Realizar check-out
//                     </button>

//                     <button type="button" className="bg-cyan-600 rounded-md text-white">
//                         Realizar check-out
//                     </button>

//                     <button type="button" onClick={RouteCadastroTipoQuarto}
//                         className="bg-cyan-600 rounded-md text-white">
//                         Cadastrar categoria de acomodação
//                     </button>

//                     <button type="button" className="bg-cyan-600 rounded-md text-white">
//                         Cadastrar Vaga no Estacionamento
//                     </button>

//                 </div>
//             </div>
//         </>
//     )
    return (
        <>

            <SideBarFuncionario>
                <div className="">

                    <div className="flex items-center text-center rounded-lg">
                        <h1 className="ml-4 w-full font-semibold mt-10 font-['consolas'] text-[28px]">Dashboard</h1>
                    </div>
                    <div className="bg-white border-t-[1px] rounded-lg pb-6
                 border-cyan-500 grid grid-cols-2 -mt-10 pt-16 gap-4 text-center">

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
            </SideBarFuncionario>
        </>
    )
}

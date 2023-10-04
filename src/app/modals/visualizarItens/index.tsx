'use client';
import { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useForm, SubmitHandler } from "react-hook-form"
import RegistraFrigobar from '@/functions/PostFrigobar';
import api from '@/services/api';
import { LuAlertOctagon } from 'react-icons/lu';
import cadastraQuarto from '@/functions/postQuartos';
import cadastrarQuartos from '../../../../public/assets/cadastrar-quartos.png';
import InputMask from 'react-input-mask';
import avatarCadastroAcomodacoes from '../../../../public/assets/avatarCadastroAcomodacoes.png'
import visualizar from '../../../../public/assets/visao.png'
import itensVisualizar from '../../../../public/assets/itensVisualizar.png';


type Inputs = {
    nome: string;
    numero: number;
    valor: number;
    max_cap: number;
    tipo_quartos_id: number;
}



export default function visualizarItens(frig: any) {
    const id = frig.id
    const data: any = {}
    data.frigobar_id = id;
    const icons = [
        { icon: LuAlertOctagon },
    ]

    const [openModal, setOpenModal] = useState<string | undefined>();
    const [itensFrigobar, setItensFrigobar] = useState([]);
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        cadastraQuarto({ data });
        console.log(data);
        // reset();
    }

    return (
        <>

            <div className=''>
                <Button

                    onClick={() => {
                        props.setOpenModal('visualizarItens'),
                            api.post('/armazenamento', data)
                                .then((sucess) => {
                                    console.log(frig.numero)
                                    console.log(sucess)
                                    setItensFrigobar(sucess.data.armazenamento);

                                }).catch((error) => {
                                    console.log(error)
                                });

                    }}


                >
                    <img src={visualizar.src}
                        alt="visualizar"
                        className="w-8 invert"
                    />
                </Button>

                <Modal show={props.openModal === 'visualizarItens'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>

                        <div className="bg-[#6E737D] m-2 h-full text-white bg-black/20">
                            <div className="bg-gray-300 p-5">
                                <img src={itensVisualizar.src} alt="visualizar" />
                            </div>
                            <h5
                                className="
                                itens-center flex
                                justify-center uppercase
                                text-semibold font-bold p-4
                                ">
                                FRIGOBAR
                                <div className="text-red-200 ml-2">
                                    {frig.numero}
                                </div>
                                :
                            </h5>
                            <div className="flex mb-5 font-semibold uppercase justify-evenly items-center">
                                <h6>Itens</h6>
                                <h6>Quantidade</h6>
                            </div>

                            {itensFrigobar.map((itens: any) => {
                                return (
                                    <div
                                        className="
                                        flex justify-evenly
                                        border-b-white text-black font-semibold bg-[#d9d9d9] border bg-">
                                        <ul className="grid grid-cols-2 space-x-16 ">
                                            <li className="-ml-12">
                                                {itens.nome}
                                            </li>
                                            <li className="">
                                                {itens.quantidade}
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



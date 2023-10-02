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
import SearchBar from '@/app/app/components/searchBar';
import listaItens from '../../../../public/assets/itensVisualizar.png'
import visualizar from '../../../../public/assets/visao.png'

type Inputs = {
    nome: string;
    numero: number;
    valor: number;
    max_cap: number;
    tipo_quartos_id: number;
}



export default function RegisterQuartoModal({ getFrigobar }: any) {

    const icons = [
        { icon: LuAlertOctagon },
    ]

    const [openModal, setOpenModal] = useState<string | undefined>();
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

    const [tipoQuarto, setTipoQuarto] = useState([]);

    useEffect(() => {
        const getTipoQuarto = async () => {
            const response = await api.get('/tipo_quarto');
            setTipoQuarto(response.data.data);
            console.log(response.data.data);
        };
        getTipoQuarto();
    }, []);

    const NumberInput = () => {
        const [value, setValue] = useState(0);

        const handleChange = (event: any) => {
            const inputValue = parseInt(event.target.value, 10);

            if (!isNaN(inputValue) && inputValue >= 0) {
                setValue(inputValue);
            }
        };
    }

    const CurrencyInput = () => {
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event: any) => {
            const { value } = event.target;

            const validInput = /^\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/.test(value);

            if (validInput) {
                setInputValue(value);
            }

        }
    }

    return (
        <>

            <div className=''>
                <Button
                    className=""
                    onClick={() => props.setOpenModal('visualizarItensFrigobar')}>
                    <img src={visualizar.src} alt="visualizar" 
                    className="w-8 invert"
                    />
                </Button>

                <Modal
                    show={props.openModal === 'visualizarItensFrigobar'} size="xl"
                    popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>


                        <div className="">
                            <div className="inset-0 flex items-center justify-center z-50 bg-blur-sm bg-opacity-60">
                                <div className="bg-[#374151] p-2 w-[90%] rounded-lg ml-1 mr-1">


                                    <div className="flex items-center justify-center bg-[#cccaca] rounded-lg w-full">
                                        <img src={listaItens.src} alt="Lista de itens"
                                            className="w-72 p-3" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* <ul>
                                        {frigobarItems.map((item, index) => (
                                            <li
                                                className="text-white flex justify-evenly items-center"
                                                key={index}>{item}</li>
                                                ))}
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                                                
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



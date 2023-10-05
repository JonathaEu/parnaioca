
'use client';
import { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Cadastro from '../../../../public/assets/cadastro.png'
import { useForm, SubmitHandler } from "react-hook-form"
import api from '@/services/api';
import EditItens from '@/functions/editItens';
import editar from '../../../../public/assets/editar.png'
import editarItem from '../../../../public/assets/editarItem.png'
import InputMask from 'react-input-mask'

type Inputs = {
    nome: string
    valor: string
    quantidade: number;
    id: number
}

export default function EditReservaModal({ getItem, index, data, item }: any) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        EditItens({ data })
            .then((response) => {
                // window.alert('Item cadastrado com sucesso')
            }).catch((err) => {
                console.log(err)
                console.error(err)
            });
        getItem()
        setOpenModal(false as any)
        reset();
    }

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
                <Button className="w-[72px]" onClick={() => props.setOpenModal('form-elements')}>
                    <img src={editar.src} alt="editar" className="border-transparent" />
                </Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <div className="flex items-center hover:invert justify-center">
                                <img src={editarItem.src}
                                    alt="editar-item"
                                    className="w-44 invert"
                                />
                            </div>
                            <div>

                            </div>


                        </div>
                    </Modal.Body>
                </Modal>
            </div >
        </>

    )
}



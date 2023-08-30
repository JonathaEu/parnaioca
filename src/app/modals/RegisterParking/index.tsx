"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import Cadastro from '../../../../public/assets/cadastro.png'
import { useState, useEffect } from 'react';
import api from '@/services/api'
import RegistraEstacionamento from '@/functions/RegisterEstacionamento'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

type Inputs = {
    quartos_id: number
}


export default function RegisterEstacionamentoModal() {
    const [estacionamento, setEstacionamento] = useState([]);
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        RegistraEstacionamento({ data })
            .then((response) => {
                window.alert('Estacionamento Relacionado com sucesso')
            }).catch((err) => {
                window.alert(err);
            });
        reset();
    }
    const [quarto, setQuarto] = useState([]);

    useEffect(() => {
        const getQuarto = async () => {
            const response = await api.get('/quarto');
            setQuarto(response.data.data);
            // console.log(response.data.data);
        };
        getQuarto();
    }, []);
    return (
        <>
            <div className='mt-32 mb-4'>
                <Button className="ml-10 p-2 bg-orange-500" onClick={() => props.setOpenModal('form-elements')}>Cadastrar Vaga no Estacinamento</Button>
                <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cadastrar Frigobar</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className='text-slate-200 grid grid-cols-1 content-center items-center rounded backdrop-blur-sm bg-black/20 w-3/3 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4 mt-14 px-5
'>
                                <div>
                                    <img src={Cadastro.src} alt="cadastro" className="w-1/5 h-full items-center"
                                    />
                                </div>
                                <div className='text-center'>
                                    <label>A Qual acomodação esta vaga pertence?</label>
                                    <div className='flex gap-10 mb-8 text-black justify-center items-center mt-10'>
                                        <select {...register("quartos_id")}>
                                            {quarto.map((item) => {

                                                return (
                                                    <>
                                                        <option value={item.id}>{item?.nome}</option>
                                                    </>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <input type='submit' className='relative text-white button w-16 h-8 bg-[#0049AC] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#0049AC,0_0px_0_0_#0049AC] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#0049AC,0_15px_0_0_#436ed234] border-b-[1px] border-[#6e86ca] left-[155px] mt-10
                                '/>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

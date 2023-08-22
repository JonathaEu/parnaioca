'use client'
import cadastraTipoQuarto from "@/functions/postQuartoCategory";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    tipo: string;
}

export default function App() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        cadastraTipoQuarto({ data })
            .then((sucess) => {
                window.alert('categoria cadastrada com sucesso');
                reset();
            })
            .catch((err) => {
                console.log(err);
                window.alert(err);
            });
    }
    return (
        <div className="">
            <div className='h-screen flex content-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}
                    className='max-w-md mx-auto p-20 bg-slate-300 shadow-md rounded-md'>
                    <div className='space-y-4'>
                        <div className='mb-4'>
                            <label htmlFor="tipo" className='block mb-2 text-sm font-medium'>
                                Categoria de Acomodação
                            </label>
                            <input defaultValue='' id="tipo" {...register('tipo', { required: true })} className='border border-gray-300
                     text-gray-900 text-sm rounded-md block w-full p-2 hover:border-slate-800'/>
                        </div>
                    </div>
                    <div>
                        <input type='submit' className='p-2 flex justify-center items-center w-full bg-indigo-500 rounded-md
                    hover:cursor-pointer '/>
                    </div>
                </form>
            </div>
        </div>
    )
}
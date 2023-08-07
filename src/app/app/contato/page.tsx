import React from 'react'
import LogoTipo from '../../../../public/assets/logo.png'

export default function Contato() {
    return (
        <div>
            <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full ">

                <section className=" p-10">
                    <form className='grid grid-cols-2 h-screen space-y-4 pl-40 items-center rounded backdrop-blur-sm bg-white/40 w-full rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-4 mt-1 px-5'>

                        <img src={LogoTipo.src} alt="logotipo" className="w-96 h-auto" />
                        <h1 className="flex flex-col items-center pb-40 pl-0 content-center text-2xl text-stone-950 p-5"><b>ALGUMA DUVIDA?  <p> QUER SUGERIR SUA OPINIÃO? </p> ENTRE EM CONTATO CONOSCO:</b>
                            <br /><br />
                            <h2>
                                <div className='space-y-4'>
                                    <div className='mb-4'>
                                        <label htmlFor="nome" className='block mb-2 text-sm font-medium'>
                                            Nome
                                        </label>
                                        <input placeholder='Digite o nome completo' id="nome" className='border text-gray-900 text-sm rounded-md border-slate-950 block w-80 p-2 hover:border-slate-800' />
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <div className='mb-4'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-medium'>
                                            Email
                                        </label>
                                        <input id="email" placeholder="Digite o email" className='border text-gray-900 text-sm border-slate-950 rounded-md block p-2 w-80 hover:border-slate-800' />
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <div className='mb-4'>
                                        <label htmlFor="email" className='block mb-2 text-sm font-medium'>
                                            Nos conte sua sugestão ou sua dúvida:
                                        </label>
                                        <input id="email" placeholder="Digite aqui" className='border text-gray-900 text-sm border-slate-950 rounded-md block p-2 w-80 hover:border-slate-800' />
                                    </div>
                                </div>


                            </h2>

                        </h1>


                    </form>
                </section>
            </div>
        </div>
    )
}
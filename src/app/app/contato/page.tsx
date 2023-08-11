'use client'
import React from 'react'
import Contatos from '../../../../public/assets/contato.png'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'


export default function Contato() {
    return (

        <>
            
            <Sidebar>
                    <div className="bg-[url('/assets/ilha.jpg')] bg-cover w-full h-screen ">
                        <div className="absolute font-roboto">

                            <div className="relative top-[30px] left-[8px] grid grid-cols-2 items-center rounded backdrop-blur-sm bg-white/60 rounded-x shadow-lg w-[90%] shadow-slate-600 mx-auto justify-center p-4 py-1 px-80">
                                <div className="w-[20.3rem]">
                                    <img src={Contatos.src} alt="contatos" className="relative top-[10px] right-[130px] w-[30.3rem] h-auto" />
                                </div>

                                <form className="relative space-x-28 left-[-10px]">
                                    <div /*title*/ className="">
                                        <h1 className="relative left-[190px] font-bold text-[#0A1B30] text-[20px]">Alguma dúvida? <p> Quer deixar sua Opinião?</p>Entre em contato conosco</h1>
                                    </div><br />

                                    <div className="space-y-0">
                                        <label className="font-semibold text-[#0A1B30]">Nome</label><br />
                                        <input type="text" name="name" placeholder='Digite seu nome completo' className="border-slate-950 block bg-[#1f4574] text-sm rounded-md order-neutral-950 text-white" required />
                                    </div>
                                    <br />
                                    <div className="space-y-0">
                                        <label className="font-semibold text-[#0A1B30]">E-mail</label><br />
                                        <input type="text" name="email" placeholder='Digite seu e-mail' className="bg-[#1f4574] text-sm rounded-md text-white border-slate-950 block" required />
                                    </div>
                                    <br />
                                    <div className="space-y-0">
                                        <label className="font-semibold text-[#0A1B30]">Seu comentário</label><br />
                                        <textarea name="postContent" rows={4} cols={30} placeholder='Digite aqui sua opinião ou dúvida' className="bg-[#1f4574] text-white text-sm rounded-md border-neutral-950 text-[15px]" required />
                                    </div>
                                    <br />
                                    <div>
                                        <input type='submit' className=' relative left-[130px] text-white button w-16 h-8 bg-[#52260A] rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#2d1f16,0_15px_0_0_#1b70f841] border-b-[1px] border-[#8e7362]' />
                                    </div>
                                    <br /><br />

                                </form>
                            </div>
                        </div>
                    </div >
            <FloatingButton/>
            </Sidebar>
            <Footer />
        </>
    )
}
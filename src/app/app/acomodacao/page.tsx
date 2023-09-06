'use client'
import React, { useState, useEffect, useRef } from 'react';
import SideBarFuncionario from '../components/SideBarFuncionario';
import suíteparnaioca from '../../../../public/assets/parnaioca_suíte.png'
import suítelopesmendes from '../../../../public/assets/lopes_mendes.png'
import suítelagoaazul from '../../../../public/assets/lagoa_azul.png'
import quartos from '../../../../public/assets/quartos.png';
import { motion } from 'framer-motion';
import home from '../../../../public/assets/home.jpg'
import pousada from '../../../../public/assets/pousada.jpg';
import parnaioca from '../../../../public/assets/pousada-entrada.jpg';
import parnaioca1 from '../../../../public/assets/acomodações/parnaioca-quarto.jpg';
import parnaioca2 from '../../../../public/assets/acomodações/parnaioca-banheiro.jpg';
import parnaioca3 from '../../../../public/assets/acomodações/piscina.jpg';
import parnaioca4 from '../../../../public/assets/acomodações/vista.jpg';
import parnaioca5 from '../../../../public/assets/acomodações/vista3.jpg';


const Parnaioca = [
    home,
    parnaioca,
    pousada,
    parnaioca1,
    parnaioca2,
    parnaioca3,
    parnaioca4,
    parnaioca5
]


export default function Acomodação() {
    const carrossel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, []);



    return (
        <>
            <SideBarFuncionario>
                <header>
                    <div className="bg-white w-[100%] shadow-2xl m-0 text-black p-2 fixed">
                        <div className="flex justify-evenly pr-24">
                            <a href={''}>
                                <img src={suítelopesmendes.src} alt="lagoazul" className="w-[120px] transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl" />
                            </a>
                            <a href={''}>
                                <img src={suítelagoaazul.src} alt="mendeslopes" className="w-[120px] transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl" />
                            </a>
                            <a href={''}>
                                <img src={suíteparnaioca.src} alt="parnaioca" className="w-[120px] transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl" />
                            </a>
                            <a href={''}>
                                <img src={quartos.src} alt="apartamentos" className="w-[120px] transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-xl" />
                            </a>
                        </div>
                    </div>
                    {/* <div className="flex">
                        <img src={acomodacoes.src} alt="acomodações" className="pt-40 w-96 m-auto" />
                    </div> */}
                </header>

                <div className="pt-40 relative">

                    <div className="w-[100%] m-0 min-h-screen items-center justify-center max-w-[700px]">

                        <motion.div ref={carrossel} /*CARROSSEL*/ className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                            <motion.div /*inner*/
                                className="flex"
                                drag="x"
                                dragConstraints={{ right: 2, left: -width }}
                                initial={{ x: 200 }}
                                animate={{ x: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}


                            >
                                {Parnaioca.map(image => (
                                    <motion.div /*item*/ className="min-h-[400px] min-w-[700px] p-1" key={image}>
                                        <img src={image.src} alt="parnaioca" className="w-[100%] h-[90%] rounded-lg pointer-events-none" />
                                    </motion.div>
                                ))}

                            </motion.div>
                        </motion.div>

                    </div>


                    <div>  {/*SUÍTE LOPES MENDES */}

                    </div>

                    <div> {/*SUÍTE PARNAIOCA*/}


                    </div>

                    <div> {/* SUÍTE LAGOA AZUL */}

                    </div>

                    <div> {/* APARTAMENTOS */}

                    </div>
                </div>
            </SideBarFuncionario>
        </>
    )
};

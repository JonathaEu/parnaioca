'use client'
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Galeria from '../components/Galeria';
import SideBarFuncionario from '../components/SideBarFuncionario';
import suíteparnaioca from '../../../../public/assets/suite-p.png';
import suítelopesmendes from '../../../../public/assets/suite-lm.png';
import suítelagoaazul from '../../../../public/assets/suite-la.png';
import quartos from '../../../../public/assets/ap.png';
import home from '../../../../public/assets/parnaioca-intro.png';
import pousada from '../../../../public/assets/pousada.jpg';
import parnaioca from '../../../../public/assets/pousada-entrada.jpg';
import parnaioca1 from '../../../../public/assets/acomodações/parnaioca-quarto.jpg';
import parnaioca2 from '../../../../public/assets/acomodações/parnaioca-banheiro.jpg';
import parnaioca3 from '../../../../public/assets/acomodações/piscina.jpg';
import parnaioca4 from '../../../../public/assets/acomodações/vista.jpg';
import parnaioca5 from '../../../../public/assets/acomodações/vista3.jpg';
import parnaioca6 from '../../../../public/assets/parnaioca-6.jpg';
import parnaioca7 from '../../../../public/assets/parnaioca-7.webp';
import parnaioca8 from '../../../../public/assets/parnaioca-8.webp';
import parnaioca9 from '../../../../public/assets/parnaioca-9.jpg';
import parnaioca10 from '../../../../public/assets/parnaioca-10.jpg';
import parnaioca11 from '../../../../public/assets/suite.jpg';
import parnaioca12 from '../../../../public/assets/suite2.jpg';
import parnaioca13 from '../../../../public/assets/Pousada2.png';
import mainImage from '../../../../public/assets/main.jpg';
import quartolopesmendes1 from '../../../../public/assets/SuíteMendesLopes/quarto1.jpg';
import quartolopesmendes2 from '../../../../public/assets/SuíteMendesLopes/quarto2.jpg';
import quartolopesmendes3 from '../../../../public/assets/SuíteMendesLopes/quarto3.jpg';
import quartolopesmendes4 from '../../../../public/assets/SuíteMendesLopes/quarto4.jpg';
import quartolopesmendes5 from '../../../../public/assets/SuíteMendesLopes/quarto5.jpg';
import banheirolopesmendes from '../../../../public/assets/SuíteMendesLopes/banheiro1.jpg';
import quartoparnaioca1 from '../../../../public/assets/SuíteParnaioca/suiteparnaioca1.jpg';
import quartoparnaioca2 from '../../../../public/assets/SuíteParnaioca/suiteparnaioca2.jpg';
import quartoparnaioca3 from '../../../../public/assets/SuíteParnaioca/suiteparnaioca3.jpg';
import quartoparnaioca4 from '../../../../public/assets/SuíteParnaioca/suiteparnaioca4.jpg';
import quartoparnaioca5 from '../../../../public/assets/SuíteParnaioca/suiteparnaioca5.jpg';
import lagoazul1 from '../../../../public/assets/SuíteLagoaAzul/lagoazul1.jpg';
import lagoazul2 from '../../../../public/assets/SuíteLagoaAzul/lagoazul2.jpg';
import lagoazul3 from '../../../../public/assets/SuíteLagoaAzul/lagoazul3.jpg';
import lagoazul4 from '../../../../public/assets/SuíteLagoaAzul/lagoazul4.jpg';
import lagoazul5 from '../../../../public/assets/SuíteLagoaAzul/lagoazul5.jpg';
import lagoazul6 from '../../../../public/assets/SuíteLagoaAzul/lagoazul6.jpg';
import apartamento1 from '../../../../public/assets/apartamentos/apartamento1.jpg';
import apartamento2 from '../../../../public/assets/apartamentos/apartamento2.jpg';
import apartamento3 from '../../../../public/assets/apartamentos/apartamento3.jpg';
import apartamento4 from '../../../../public/assets/apartamentos/apartamento4.jpg';
import apartamento5 from '../../../../public/assets/apartamentos/apartamento5.jpg';
import apartamento6 from '../../../../public/assets/apartamentos/apartamento6.jpg';
import Header from '../components/Header';


const Slide = [
    home,
    parnaioca,
    pousada,
    parnaioca11,
    parnaioca10,
    parnaioca1,
    parnaioca13,
    parnaioca12,
    parnaioca2,
    parnaioca3,
    parnaioca4,
    parnaioca5,
    parnaioca6,
    parnaioca7,
    parnaioca8,
    parnaioca9,
];


const lopesmendes = [
    quartolopesmendes1,
    quartolopesmendes2,
    quartolopesmendes3,
    quartolopesmendes4,
    quartolopesmendes5,
    banheirolopesmendes,
];

const suiteparnaioca = [
    quartoparnaioca1,
    quartoparnaioca2,
    quartoparnaioca3,
    quartoparnaioca4,
    quartoparnaioca5,
];

const lagoaazul = [
    lagoazul1,
    lagoazul2,
    lagoazul3,
    lagoazul4,
    lagoazul5,
    lagoazul6,
];

const apartamentos = [
    apartamento1,
    apartamento2,
    apartamento3,
    apartamento4,
    apartamento5,
    apartamento6,

];

export default function Acomodação() {
    const carrossel = useRef();
    const [width, setWidth] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [img2, setImg2] = useState([]);
    const [scrolling, setScrolling] = useState(false);

{/*PARA FAZER UM SCROLL SUAVE DENTRO DA PÁGINA PELAS OPÇÕES DE ACOMODAÇÕES DA HEADER*/ }
useEffect(() => {
    const smoothScroll = (target: any) => {
        const element = document.querySelector(target);
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
        });
    };

    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute("href");
            smoothScroll(targetId);
        });
    });
}, []);

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll)
    };
}, []);

const handleScroll = () => {
    if (window.scrollY > 100) {
        setScrolling(true);
    } else {
        setScrolling(false);
    }
};

const closeModal = () => {
    setModalOpen(false);
};

const openModal = (cosntextra: any) => {
    setImg2(cosntextra)
    setModalOpen(true);
};

useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)

    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === Slide.length - 1 ? 0 : prevIndex + 1
        );
    }, 5000);
    return () => clearInterval(interval);

}, []);

return (

    <>
        <SideBarFuncionario>

            <Header />


            <div className="pt-32 w-[100%]">
                <div className="flex justify-center items-center p-5">
                    <div className="m-0 max-w-[700px]">

                        <motion.div ref={carrossel} /*CARROSSEL*/ className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
                            <motion.div /*inner*/
                                className="flex transition duration-500 ease-in-out hover:scale-110 hover:drop-shadow-xl"
                                drag="x"
                                dragConstraints={{ right: 2, left: -width }}
                                initial={{ x: 200 }}
                                animate={{ x: -currentImageIndex * 700 }} whileInView={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}


                            >
                                {Slide.map((lopesmendes, index) => (
                                    <motion.div /*item*/ className="min-h-[400px] min-w-[700px] p-1" key={index}>
                                        <img src={lopesmendes.src} alt="parnaioca" className="w-[100%] h-[90%] rounded-lg pointer-events-none " />
                                    </motion.div>
                                ))}

                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <section id={'suitelopesmendes'}>
                </section>
                <br />
                <div>  {/*SUÍTE LOPES MENDES */}
                    <div className="bg-slate-200 flex p-20">
                        <img src={suítelopesmendes.src} alt="lopesmendes" className="w-64" />
                    </div>

                    <div className="flex justify-evenly">
                        <img
                            src={mainImage.src}
                            alt="Foto Principal"
                            onClick={() => { openModal(lopesmendes) }}
                            className="
                                    hover:opacity-80 transition-opacity
                                    w-72 cursor-pointer hover:transition-all
                                p-2"
                        />
                        <Galeria images={img2} modalOpen={modalOpen} onClose={closeModal} />
                        <div className="p-10">
                            <h6 className="text-justify font-normal">
                                Acomoda até 2 pessoas;<p />
                                Cama King-size com lençóis de alta qualidade;<p />
                                Ar-condicionado para um clima perfeito;<p />
                                Varanda privativa com vista panorâmica;<p />
                                Banheiro luxuoso com banheira de hidromassagem;<p />
                                Mini-bar abastecido com bebidas premium;<p />
                                TV de tela plana com canais a cabo;<p />
                                Estação de café e chá com cafeteira Nespresso e chaleira elétrica;<p />
                                Produtos de higiene pessoal da renomada marca L'Occitane;<p />
                                Serviço de quarto 24 horas para sua conveniência.<p />
                            </h6>

                        </div>

                        <div className="grid items-center">
                            <a href="/app/reservas"
                                className="
                                        p-3 text-[12px] uppercase
                                        text-bold text-center 
                                        text-white bg-slate-600
                                        rounded-xl hover:bg-lime-800
                                        transition duration-300 ease-in-out
                                        hover:scale-110 hover:drop-shadow-xl
                                     ">
                                Fazer Checkin
                            </a>
                            <a href="/app/cliente/cadastro"
                                className="
                                        p-3 text-[12px] uppercase
                                        text-bold text-center 
                                        text-white bg-slate-600
                                        rounded-xl hover:bg-lime-800
                                        transition duration-300 ease-in-out
                                        hover:scale-110 hover:drop-shadow-xl
                                        ">
                                Cadastrar Cliente
                            </a>
                        </div>
                    </div>
                </div>


                <section id={'suiteparnaioca'}>
                    <div> {/*SUÍTE PARNAIOCA*/}

                        <div className="bg-slate-200 flex p-20">
                            <img src={suíteparnaioca.src} alt="lopesmendes" className="w-64" />
                        </div>

                        <div className="flex justify-evenly">
                            <img
                                src={mainImage.src}
                                alt="Foto Principal"
                                onClick={() => { openModal(suiteparnaioca) }}
                                className="
                                hover:opacity-80 transition-opacity
                                w-72 cursor-pointer hover:transition-all
                                p-2"
                            />
                            <div className="p-10">
                                <h6 className=" text-justify">

                                    Acomodação exclusiva para casais;<p />
                                    Cama King-size com dossel e roupas de cama de luxo;<p />
                                    Jacuzzi privativa para relaxamento total;<p />
                                    Varanda privativa com vista panorâmica para um cenário romântico;<p />
                                    Ar-condicionado para um clima perfeito;<p />
                                    Lareira aconchegante para noites românticas;<p />
                                    Mini-bar com seleção premium de vinhos e champanhes;<p />
                                    TV de tela plana com canais a cabo;<p />
                                    Estação de café e chá com cafeteira Nespresso e chaleira elétrica;<p />
                                    Produtos de higiene pessoal da renomada marca L'Occitane;<p />
                                    Roupões de banho e chinelos macios;<p />
                                    Serviço de quarto 24 horas para tornar cada momento especial.
                                </h6>
                            </div>

                            <div className="grid items-center">
                                <a href="/app/reservas"
                                    className="
                                     p-3 text-bold uppercase
                                     text-[12px] text-center
                                   text-white bg-slate-600
                                     rounded-xl hover:bg-lime-800
                                     transition duration-300 ease-in-out
                                     hover:scale-110 hover:drop-shadow-xl
                                ">
                                    Fazer Checkin
                                </a>
                                <a href="/app/cliente/cadastro"
                                    className="
                                    p-3 text-[12px] uppercase
                                    text-bold text-center 
                                    text-white bg-slate-600
                                    rounded-xl hover:bg-lime-800
                                    transition duration-300 ease-in-out
                                    hover:scale-110 hover:drop-shadow-xl
                                    ">
                                    Cadastrar Cliente
                                </a>
                            </div>
                        </div>


                    </div>
                </section>

                <section id={'suitelagoaazul'}>
                    <div> {/* SUÍTE LAGOA AZUL */}

                        <div className="bg-slate-200 flex p-20">
                            <img src={suítelagoaazul.src} alt="lopesmendes" className="w-64" />
                        </div>

                        <div className="flex justify-evenly">
                            <img
                                src={mainImage.src}
                                alt="Foto Principal"
                                onClick={() => { openModal(lagoaazul) }}
                                className="
                                hover:opacity-80 transition-opacity
                                w-72 cursor-pointer hover:transition-all
                                p-2"
                            />
                            <div className="p-10">
                                <h6 className=" text-justify">

                                    Espaço amplo e aconchegante para 2 pessoas;<p />
                                    Cama King-size com dossel e roupas de cama de alta qualidade;<p />
                                    Banheira de hidromassagem privativa para relaxamento supremo;<p />
                                    Lareira a lenha para noites românticas;<p />
                                    Varanda privativa com vistas deslumbrantes;<p />
                                    Ar-condicionado para manter o clima perfeito;<p />
                                    TV de tela plana com canais a cabo para entretenimento;<p />
                                    Mini-bar abastecido com uma seleção premium de bebidas;<p />
                                    Estação de café e chá com cafeteira Nespresso e chaleira elétrica;<p />
                                    Produtos de banho da luxuosa marca L'Occitane;<p />
                                    Roupões de banho e chinelos felpudos;<p />
                                    Serviço de quarto 24 horas para sua comodidade.
                                </h6>
                            </div>

                            <div className="grid items-center">
                                <a href="/"
                                    className="
                                    p-3 text-bold uppercase
                                    text-[12px] text-center
                                    text-white bg-slate-600
                                     rounded-xl hover:bg-lime-800
                                     transition duration-300 ease-in-out
                                     hover:scale-110 hover:drop-shadow-xl
                                ">
                                    Fazer Checkin
                                </a>
                                <a href="/"
                                    className="
                                    p-3 text-[12px] uppercase
                                    text-bold text-center 
                                  text-white bg-slate-600
                                    rounded-xl hover:bg-lime-800
                                    transition duration-300 ease-in-out
                                    hover:scale-110 hover:drop-shadow-xl
                                ">
                                    Cadastrar Cliente
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <section id={'apartamentos'}>
                    <div> {/* APARTAMENTOS */}
                        <div className="bg-slate-200 flex p-20">
                            <img src={quartos.src} alt="lopesmendes" className="w-64" />
                        </div>

                        <div className="flex justify-evenly">
                            <img
                                src={mainImage.src}
                                alt="Foto Principal"
                                onClick={() => { openModal(apartamentos) }}
                                className="
                                hover:opacity-80 transition-opacity
                                w-72 cursor-pointer hover:transition-all
                                p-2"
                            />
                            <div className="p-10">
                                <h6 className=" text-justify">

                                    Acomodações para 2 ou mais pessoas;<p />
                                    Cama confortável para uma boa noite de sono;<p />
                                    Banheiro privativo com chuveiro e toalhas limpas;<p />
                                    TV de tela plana com canais locais;<p />
                                    Ventilador ou ar-condicionado, dependendo da estação;<p />
                                    Espaço de armazenamento para suas roupas e pertences;<p />
                                    Pequena área de estar para relaxar;<p />
                                    Wi-Fi gratuito para se manter conectado;<p />
                                    Limpeza diária para sua comodidade;<p />
                                    Café da manhã continental incluído na tarifa.
                                </h6>
                            </div>

                            <div className="grid items-center">
                                <a href="/"
                                    className="
                                     p-3 text-bold uppercase
                                     text-[12px] text-center
                                   text-white bg-slate-600
                                     rounded-xl hover:bg-lime-800
                                     transition duration-300 ease-in-out
                                     hover:scale-110 hover:drop-shadow-xl
                                ">
                                    Fazer Checkin
                                </a>
                                <a href="/"
                                    className="
                                    p-3 text-[12px] uppercase
                                    text-bold text-center 
                                  text-white bg-slate-600
                                    rounded-xl hover:bg-lime-800
                                    transition duration-300 ease-in-out
                                    hover:scale-110 hover:drop-shadow-xl
                                ">
                                    Cadastrar Cliente
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </SideBarFuncionario>
    </>
)
};

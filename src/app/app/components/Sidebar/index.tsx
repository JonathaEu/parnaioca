import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoTipo from '../../../../../public/assets/logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiUser, BiBed, BiDrink, BiMessageRounded } from 'react-icons/bi';
import { AiFillCar, AiFillHeart } from 'react-icons/ai'
import Link from "next/link";

const Sidebar = () => {
    const menus = [
        { name: "dashboard", link: '/', icon: MdOutlineDashboard },
        { name: "login", link: "/", icon: BiUser },
        { name: "acomodações", link: '/', icon: BiBed },
        { name: "frigobar", link: '/', icon: BiDrink },
        { name: "estacionamento", link: '/', icon: AiFillCar },
        { name: "contato", link: '/', icon: BiMessageRounded },
        { name: "sobre", link: '/', icon: AiFillHeart },
    ];
    return (
        <section className="flex gap-6">
            <div className="bg-[#3d4436] min-h-screen w-52 text-gray-200  px-4">
                <div className="py-3 flex justify-end">
                    <GiHamburgerMenu size={26} className=" cursor-pointer" />
                </div>
                <div> <img src={LogoTipo.src} alt="logotipo" className="w-36 h-auto" /></div><br /><hr /><br />
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link href={menu?.name} key={i} className="flex items-center text-xs gap-2 p-1 font-medium hover:bg-[#083c0d52] hover:p-1 hover:w-[100%]">
                            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                            <h2>{menu?.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="m-3 text-x1 text-gray-900 font-semibold">
                PARNAIOCA
            </div>
        </section>
    );
}

{/* <a href="/" className="space-y-2">
                        <h2>Início</h2>
                    </a>
                    <a href="./app/funcionario/login">
                        <h2>Login</h2>
                    </a>
                    <a href="#">
                        <h2>Acomodações</h2>
                    </a>
                    <a href="/">
                        <h2> Estacionamento</h2>
                    </a>
                    <a href="./app/contato">
                        <h2> Contato</h2>
                    </a>
                    <a href="/">
                        <h2> Sobre</h2>
                    </a> */}

export default Sidebar;
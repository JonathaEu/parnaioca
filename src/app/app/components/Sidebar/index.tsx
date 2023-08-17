'use client'

import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoTipo from '../../../../../public/assets/logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiUser, BiBed, BiDrink, BiMessageRounded } from 'react-icons/bi';
import { AiFillCar, AiFillHeart } from 'react-icons/ai';
import Link from "next/link";

function Sidebar({ children }: any) {
    const menus = [
        { name: "Login", href: "../../../../app/funcionario/login", icon: BiUser },
        { name: "Dashboard", url: '', href: '../../../../app/dashboard', icon: MdOutlineDashboard },
        { name: "A pousada", href: '../../../app/pousada', icon: AiFillHeart },
        { name: "Acomodações", url: '', href: '/', icon: BiBed },
        { name: "Frigobar", url: '', href: '/', icon: BiDrink },
        { name: "Estacionamento", url: '', href: '/', icon: AiFillCar },
        { name: "Fale Conosco", href: '../../app/contato', icon: BiMessageRounded, margin: "" }
    ];

    const [open, setOpen] = useState(true);

    return (
        <section className="flex">
            <div className={`bg-[#3d4436] min-h-screen w-100 ${open ? 'w-14' : 'w-52'} duration-500 text-gray-200 px-4`}>
                <div className="py-3 flex justify-end">
                    <GiHamburgerMenu
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)} />
                </div>
                <div> <a href="/"> <img src={LogoTipo.src} alt="logotipo" className="w-36 h-auto" /></a></div><br /><hr /><br />
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link href={menu?.href} key={i} className={`${menu?.margin && "mt-5"} group flex items-center text-xs gap-2 p-1 font-medium hover:bg-[#083c0d52] hover:p-1 hover:w-[100%]`}>
                            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                            <h2 style={{ transitionDelay: `${i + 500}ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}></h2>
                            {!open ?
                                <h2>{menu?.name}</h2>
                                :
                                <h2 className={`${!open && "hidden"} absolute left-48 z-50 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-150 group-hover:w-fit`}>
                                    {menu?.name}
                                </h2>}
                        </Link>
                    ))}
                    <hr />
                </div>
            </div>
            {children}
        </section>
    );
}
export default Sidebar;
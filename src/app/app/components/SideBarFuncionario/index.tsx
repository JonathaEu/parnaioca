'use client'

import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Administrador from '../../../../../public/assets/administrador.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiBed, BiDrink } from 'react-icons/bi';
import { AiFillCar, AiOutlineLogin, AiFillCheckCircle } from 'react-icons/ai';
import { RiReservedLine } from 'react-icons/ri';
import { BsPersonBadge } from 'react-icons/bs';
import Link from "next/link";
import logout from "@/functions/logout";
import LogoTipo from '../../../../../public/assets/logo.png'


function Sidebar({ children }: any) {

  const menus = [
    { name: "Dashboard", href: '/', icon: MdOutlineDashboard },
    { name: "Clientes", href: "/", icon: BsPersonBadge },
    { name: "Reservas", href: '/', icon: RiReservedLine, margin: "" },
    { name: "Check in / Check out", href: "/", icon: AiFillCheckCircle },
    { name: "Acomodações", href: '/', icon: BiBed },
    { name: "Frigobar", href: '/', icon: BiDrink },
    { name: "Estacionamento", href: '/', icon: AiFillCar },

  ];

  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="flex h-screen bg-gray-100">
        <div className={`bg-[#000] min-h-screen w-100 ${open ? 'w-14' : 'w-52'} duration-500 text-gray-200 px-4`}>
          <div className="py-3 flex justify-end">
            <GiHamburgerMenu
              size={26}
              onClick={() => setOpen(!open)} 
              className="cursor-pointer"/>
          </div>
          <div> <img src={LogoTipo.src} alt="logotipo" className="w-56 h-auto" /></div><br /><hr /><br />
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link href={menu?.href} key={i} className={`${menu?.margin && "mt-5"} group flex items-center text-xs gap-2 p-1 font-medium hover:bg-[#1b1e4d] hover:rounded-full hover:p-1 hover:w-[100%]`}>
                <div>{React.createElement(menu?.icon, { size: '16' })}</div>
                <h2 style={{ transitionDelay: `${i + 500}ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}></h2>
                {!open ?
                  <h2>{menu?.name}</h2>
                  :
                  <h2 className={`${!open && "hidden"} absolute left-48 z-50 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-150 group-hover:w-fit`}>
                    {menu?.name}
                  </h2>}
              </Link>

            ))}

            <hr className="text-base" />

            <button onClick={logout}>
              <div className={"text-lg pl-1 over:bg-slate-900 hover:rounded-full hover:bg-slate-900 flex flex-col"}>
                <AiOutlineLogin />
              </div>
            </button>
            <hr />
          </div>
        </div>
        {children}
      </section>
    </>
  )
};

export default Sidebar;
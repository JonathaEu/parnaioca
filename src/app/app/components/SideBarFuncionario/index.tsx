'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDashboard } from 'react-icons/md';
import { BiBed, BiDrink } from 'react-icons/bi';
import { FiUserCheck } from 'react-icons/fi';
import { AiFillCar, AiOutlineLogin, AiFillCheckCircle } from 'react-icons/ai';
import { RiReservedLine } from 'react-icons/ri';
import { BsCashCoin } from 'react-icons/bs';
import logout from "@/functions/logout";
import LogoTipo from '../../../../../public/assets/logo.png';
import { TbHemispherePlus } from 'react-icons/tb';

function SideBarFuncionario({ children }: any) {
  const menus = [
    { name: "Dashboard", href: '/app/dashboard', icon: MdOutlineDashboard },
    { name: "Clientes", href: "/app/cliente/cadastro", icon: FiUserCheck },
    { name: "Acomodações", href: '/app/acomodacao', icon: BiBed },
    { name: "Reservas", href: '/app/reservas', icon: RiReservedLine, margin: "" },
    { name: "Check in / Check out", href: "/", icon: AiFillCheckCircle },
    { name: "Pagamento", href: '/app/pagamento', icon: BsCashCoin },
    { name: "Frigobar", href: '/app/frigobar', icon: BiDrink },
    { name: "Itens", href: '/app/itens', icon: TbHemispherePlus },
    { name: "Estacionamento", href: '/app/estacionamento', icon: AiFillCar },

  ];

  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="flex">
        <div className={`bg-[#000] min-h-screen w-100 ${open ? 'w-14 z-50 fixed' : 'z-50 w-52'} z-50 fixed duration-500 text-gray-200 px-4`}>
          <div className="py-3 flex justify-end">
            <GiHamburgerMenu
              size={26}
              onClick={() => setOpen(!open)}
              className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={LogoTipo.src}
              alt="logotipo"
              className="w-36 h-auto"
            />
          </div>
          <br /><hr /><br />
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link href={menu?.href}
                key={i}
                className={`${menu?.margin && "mt-5"}
              group flex items-center
              text-xs gap-2 p-1 font-medium
              hover:text-[#000]
              hover:bg-[#8BC53E]
              hover:rounded-full
              hover:p-1 hover:w-[100%]
              `}>
                <div>{React.createElement(menu?.icon, { size: '16' })}</div>
                <h2 style={{ transitionDelay: `${i + 500}ms`, }}
                  className={`
                whitespace-pre duration-500
                ${!open && "opacity-0 translate-x-28 overflow-hidden"}
                `}>

                </h2>
                {!open ?
                  <h2>{menu?.name}</h2>
                  :
                  <h2
                    className={`
                  ${!open && "hidden"}
                  absolute left-48 z-50
                  bg-[#8BC53E] font-semibold 
                  whitespace-pre text-black
                  rounded-md drop-shadow-lg
                  px-0 py-0 w-0 overflow-hidden
                  group-hover:px-2 group-hover:py-1
                  group-hover:left-14 
                  group-hover:duration-150
                  group-hover:w-fit
                  `}>
                    {menu?.name}
                  </h2>}
              </Link>

            ))}

            <hr className="text-base" />

            <button onClick={logout}>
              <div
              className={"text-lg pl-1 over:bg-slate-900 hover:rounded-full hover:bg-[#8BC53E] hover:text-[#000] flex flex-row"}>
                <AiOutlineLogin />
              </div>
            </button>
            <hr />
          </div>
        </div >
        {children}
      </section >
    </>
  )
};

export default SideBarFuncionario;
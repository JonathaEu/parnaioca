import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import acomodacoes from '../../../../../public/assets/acomodacoes.png';



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    return (
        <div>
            <div className={`${isScrolled ? 'bg-[#abeb56]' : 'bg-white' }
                     transition-all duration-300 pt-2 ease-in-out w-[100%]
                     shadow-2xl m-0 fixed z-50 flex
                       items-center justify-center hover:bg-[#688c7d]`}>

                <div className={`${isScrolled ? 'grid' : 'text-[#abeb56]'} grid text-[12px] text-black`}>
                   
                   <div className="flex justify-center items-center">
                    <img src={acomodacoes.src} alt="acomodações" className={`${isScrolled ? 'w-[230px] pt-3' : 'transition-all duration-300 ease-out' } w-[300px] pt-3 transition-all duration-300 ease-in-out`} />
                   </div>

                    <div className="flex pb-2">
                        <Link href={'#suitelopesmendes'} className="transition-all duration-300 ease-in-out text-[12px] pl-2 pr-2 font-medium hover:transition-transform hover:bg-green-800 hover:rounded-full hover:text-white text-center">
                            <h6>SUÍTE LOPES MENDES</h6>
                        </Link>

                        <Link href={'#suiteparnaioca'} className="transition-all duration-300 ease-in-out scroll-smooth pl-2 pr-2 font-medium hover:transition-transform hover:bg-green-800 hover:rounded-full hover:text-white text-center">
                            <h6>SUÍTE PARNAIOCA</h6>
                        </Link>

                        <Link href={'#suitelagoaazul'} className="transition-all duration-300 ease-in-out scroll-smooth pl-2 pr-2 font-medium hover:transition-transform hover:bg-green-800 hover:rounded-full hover:text-white text-center">
                            SUÍTE LAGOA AZUL
                        </Link>

                        <Link href={'#apartamentos'} className="transition-all duration-300 ease-in-out scroll-smooth pl-2 pr-2 font-medium hover:transition-transform hover:bg-green-800 hover:rounded-full hover:text-white text-center">
                            <h6>APARTAMENTOS</h6>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header;

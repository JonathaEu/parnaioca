import React from "react";
import Placa from '../../../../../public/assets/PlacaPousada.png';
import Facebook from '../../../../../public/assets/facebook.png';
import Instagram from '../../../../../public/assets/instagram.png';
import Whatsapp from '../../../../../public/assets/whatsapp.png';

function Footer( { children }:any) {
    return (
        <>
            <div className="absolute bg-[#313731] w-full">
                <div className="grid grid-flow-col items-center ">
                    <h6 className="font-semibold text-white text-[10px] text-center">Abraão - Angra dos Reis - RJ<p/>
                    A Ilha Grande, faz parte de um arquipélago de 187 ilha e ilhotas,<p/>
                    localizada na Baia da Ilha Grande, costa oeste do Estado do Rio de Janeiro,<p/>
                    região também conhecida como Costa Verde. A região é um dos locais mais<p/>
                    bonitos do Oceano Atlântico.  Embora, juridicamente pertença ao município<p/>
                    de Angra dos Reis como 3º Distrito municipal, com sede na Vila do Abraão,<p/>
                    a Ilha Grande fica  de frente também para os municípios  de Mangaratiba<p/>
                    e Paraty. O mar predominante verde abriga valiosa e biodiversidade e <p/>
                    belos cenários.</h6>
                    <img src={Placa.src} alt="Placa" className="w-72" />
                    <div>
                        <div className="flex space-x-4 cursor-pointer">
                            <img src={Facebook.src} alt="facebook" className="w-8 h-auto" />
                            <img src={Instagram.src} alt="instagram" className="w-8 h-auto" />
                            <img src={Whatsapp.src} alt="whatsapp" className="w-8 h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}

export default Footer;
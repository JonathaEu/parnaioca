import React from "react";
import Placa from '../../../../../public/assets/PlacaPousada.png';


function Footer() {
    return (
        <>
            <div className="bg-[#313731]">
                <img src={Placa.src} alt="Placa" className="flex items-center justify-center w-72 h-auto" />
            </div>
        </>
    )
}

export default Footer;
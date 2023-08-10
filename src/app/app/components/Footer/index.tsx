import React from "react";
import Placa from '../../../../../public/assets/PlacaPousada.png';


function Footer() {
    return (
        <>
            <div className="bg-[#313731] grid grid-flow-col items-center justify-center">
                <img src={Placa.src} alt="Placa" className="w-72" />
            <hr />
            
            </div>
        </>
    )
}

export default Footer;
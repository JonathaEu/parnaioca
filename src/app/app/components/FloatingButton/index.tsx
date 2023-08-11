import React from 'react'
import Whatsapp from '../../../../../public/assets/whatsapp.gif';

function FloatingButton({ children }: any) {
    return (
        <>
            <div className="right-8 py-10 pt-[30rem] w-20 h-auto fixed">
                <a href=""><img src={Whatsapp.src} alt="Whatsapp"/></a>
            </div>
            {children}
        </>
    )
}

export default FloatingButton;
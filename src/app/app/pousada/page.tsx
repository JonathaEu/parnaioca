import React from 'react';
import Sidebar from '../components/Sidebar';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';
import LogoTipo from '../../../../public/assets/logo.png';
import Relaxar from '../../../../public/assets/relaxar.gif';


export default function Pousada(){
    return(
        <>
    <Sidebar>
    <FloatingButton/>


        <div className="bg-[url('/assets/home.jpg')] bg-cover w-full h-screen">
            <header className="bg-[#0000008a]">
            </header>

        </div>
            
        </Sidebar>
        <Footer/>
        </>
    )
}
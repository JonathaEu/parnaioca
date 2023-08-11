import React from "react";
import Sidebar from "./app/components/Sidebar";
import Footer from './../app/app/components/Footer';
import FloatingButton from "./app/components/FloatingButton";


export default function Home(){
  return(
    <>
    <div>
    <Sidebar>
    <FloatingButton/>
    </Sidebar>
    <Footer/>
    </div>
    </>
  )
}
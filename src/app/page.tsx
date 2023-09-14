'use client'
import Footer from './app/components/Footer'
import Sidebar from './app/components/Sidebar'
import React from "react";
import FloatingButton from "./app/components/FloatingButton";


function Home() {
  return (
    <>
      <Sidebar>
        <FloatingButton />
      </Sidebar>
      <Footer />
    </>
  );
}

export default Home;
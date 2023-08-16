'use client'
import React from "react";
import Sidebar from "./app/components/Sidebar";
import Footer from './../app/app/components/Footer';
import FloatingButton from "./app/components/FloatingButton";

function Home() {
  return (
    <>
      <div>
        <Sidebar>
          <FloatingButton />
        </Sidebar>
        <Footer />
      </div>
    </>
  );
}

export default Home;
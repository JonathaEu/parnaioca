'use client'
import LogoTipo from '../../public/assets/logo.png'

export default function Home() {
  return (
    <header className="bg-[url('../../public/assets/header.jpg')] w-full bg-cover p-4 flex items-center justify-between">
        <div className="w-32 h-auto">
          <img src={LogoTipo.src} alt="Logotipo"/>
        </div>

        <nav className="space-x-4 items-center text-xs">
          <a href="#" className="text-black">Login</a> ·
          <a href="#" className="text-black">Cadastrar clientes</a> ·
          <a href="#" className="text-black">Sobre</a> ·
        </nav>
    </header>
  )
}

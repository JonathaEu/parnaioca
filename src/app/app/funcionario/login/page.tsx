'use client'
import { AuthProvider, useStateContext } from '@/context/AuthProvider';
// import AuthContext from '@/context/AuthProvider';
// import Signin from '@/functions/postUsers';
import { useContext, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import ImgLogo from '../../../../../public/assets/logo.png'


type Inputs = {
  name: string,
  password: string,
};

export default function login() {

  // const { setAuth }: any = useContext(AuthContext);
  const { setToken, setUser, user, Signin } = useStateContext();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {

    console.error(data)
    Signin({ data })
    console.log(data);
  }

  return (
    <>

      <div className="bg-[url('/assets/home.jpg')] bg-cover w-full h-screen">

        <section className="flex h-screen jutify-center items-center ">
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col content-center items-center backdrop-blur-sm bg-white/30  w-96 h-4/5 rounded-x shadow-lg shadow-slate-600 mx-auto p-4 py-24
      mt-1 px-10'>
            <div>
              <img src={ImgLogo.src} alt="logotipo" className="w-40 h-auto justify-center items-center" />
            </div><br />
            <div className="space-y-4 mb-1">
              <div className="4">
                <label htmlFor="name" className='block mb-2 text-sm text-gray-950 font-medium'>
                  Login
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input  {...register("name", { required: true })} placeholder='Digite seu login'
                  className='border border-gray-300 text-sm rounded-md
            block p-2 hover:border-slate-800'
                />
              </div>
            </div>

            <div className="space-y-4 mb-1">
              <div className='mb-4'>
                <label htmlFor="password" className='block mb-2 text-sm text-gray-950 font-medium'>
                  Senha
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input  {...register("password", { required: true })} placeholder='Digite sua senha'
                  className='border border-gray-300 text-black text-sm rounded-md
            block p-2 hover:border-slate-800'
                />
              </div>
            </div>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            <input type="submit" className='p-2 font-medium w-36 mt-4 bg-lime-500 rounded-md
      hover:cursor-pointer transition ease-in-out delay-150 hover:text-white duration-300 py-2 px-4 transform hover:bg-green-950'/>
          </form>
        </section>
      </div>
    </>
  );
}

'use client'
import Signin from '@/functions/postUsers';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import ImgLogo from '../../../../../public/assets/logo.png'

type Inputs = {
  name: string,
  password: string,
};

export default function login() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    Signin({ data }).then((sucess) => {
      console.log(sucess);
      window.location.href = '/'
    }).catch((err) => {
      console.log(err)
    });
  }

  // console.log(watch("example")) // watch input value by passing the name of it
  // if (response.data.status ='200') {
  //   //     roteador()
  //   //     console.log('jacaré')
  //   }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="bg-[url('/assets/home.jpg')] bg-cover w-full h-screen">
      <section className="flex h-screen jutify-center items-center">
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

          <input type="submit" className='p-2 font-medium w-full mt-4 bg-lime-500 rounded-md
      hover:cursor-pointer'/>
        </form>
      </section>
    </div>
  );
}

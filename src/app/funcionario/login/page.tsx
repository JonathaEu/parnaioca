'use client'
import Signin from '@/functions/postUsers';
import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className='bg-sky-300'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-4 py-24
     bg-neutral-700 shadow-lg rounded-md mt-10 px-10 border-blue-400 border
     '>
        <div className='space-y-4 mb-10'>
          <div className='mb-4'>
            <label htmlFor="name" className='block mb-2 text-sm text-white font-medium'>
              Nome
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input  {...register("name", { required: true })}
              className='border border-gray-300 text-gray-900 text-sm rounded-md
            block w-full p-2 hover:border-slate-800'
            />
          </div>
        </div>

        <div className='space-y-4 mb-10'>
          <div className='mb-4'>
            <label htmlFor="password" className='block mb-2 text-sm text-white font-medium'>
              Senha
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input  {...register("password", { required: true })}
              className='border border-gray-300 text-gray-900 text-sm rounded-md
            block w-full p-2 hover:border-slate-800'
            />
          </div>
        </div>

        <input type="submit" className='p-2 font-serif w-full mt-4 bg-teal-500 rounded-md
      hover:cursor-pointer'/>
      </form>
    </div>
  );
}

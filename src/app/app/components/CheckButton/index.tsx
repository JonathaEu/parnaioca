'use client';
import React, { useEffect, useState } from 'react';
import api from '@/services/api';


const CheckButton = (id: any) => {
    // useEffect(() => {
    //     const getStatus = async () => {
    //         const response = await api.get('/');
    //         setStatus(response.data.data);
    //         console.log(response);
    //     };
    //     getStatus();
    // }, []);
    const reserva_id = id.id;
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const dateTime = today + ' ' + time;
    const check_in: any = {};
    const check_out: any = {};
    check_in.check_in = dateTime;
    check_in.check_out = dateTime;

    const checkIN = () => {
        api.put(`/check-in/${reserva_id}`, check_in)
            .then((sucess) => {
                console.log(sucess)
            }).catch((err) => {
                console.log(err);
            })
    }
    console.log(check_in);
    const checkOut = () => {
        api.put(`/check-out/${reserva_id}`, check_in)
            .then((sucess) => {
                console.log(sucess)
            }).catch((err) => {
                console.log(err);
            })
    }
    // console.log(selectedOption);

    return (
        <div className="flex flex-col-1 justify-center">

            <button className='bg-green-400'
                onClick={checkIN}
            >
                Check in
            </button>
            <button className='bg-red-400'
                onClick={checkOut}
            >
                Check out
            </button>

        </div>
    );
};

export default CheckButton;
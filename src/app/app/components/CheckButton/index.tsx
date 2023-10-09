'use client';
import React, { useEffect, useState } from 'react';
import api from '@/services/api';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';



const CheckButton = (id: any) => {
    const [checkinClicked, setCheckinCliked] = useState(false);
    const [checkoutClicked, setCheckoutCliked] = useState(false);
    const [isDisable, setIsDisable] = useState(false);

    const handleCheckinCliked = () => {
        setCheckinCliked(true);
        setCheckoutCliked(false);

    }

    const handleCheckoutCliked = () => {
        setCheckinCliked(false);
        setCheckoutCliked(true);
    }

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
        console.log('checkIn')
        api.put(`/check-in/${reserva_id}`, check_in)
            .then((sucess) => {
                console.log(sucess)
            }).catch((err) => {
                console.log(err);
            })
    }
    

    console.log(check_in);

    const checkOut = () => {
        setIsDisable(true)
        console.log('aaaaaaaaaaaa')
        api.put(`/check-out/${reserva_id}`, check_in)
            .then((sucess) => {
                console.log(sucess)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (

        <div className="flex flex-col-1 justify-center">
            <button
                type='button'
                disabled={isDisable}
                className={`uppercase w-auto p-3 rounded-l-lg cursor-pointer transition-transform transform  active:scale-95 py-2 px-4 ${isDisable ? 'bg-gray-600 cursor-not-allowed' : ""
            } font-bold flex items-center justify-center bg-green-700`}
                onClick={checkIN}
            >

                Check in <AiFillLike className="ml-2" />
            </button>

            <button
                value='Check out'
                type='button'
                className={`uppercase w-auto p-3 rounded-r-lg cursor-pointer transition-transform transform active:scale-95 py-2 px-4 ${checkinClicked ? "bg-gray-500" : "bg-red-700 hover:bg-red-800 active:bg-red-900"
                    } font-bold flex items-center justify-center`}
                onClick={checkOut}
            >
                <AiFillDislike className="mr-2"/> Check out
            </button>
        </div>
    );
};

export default CheckButton;
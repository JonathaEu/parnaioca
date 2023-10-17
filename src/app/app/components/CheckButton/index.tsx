'use client';
import React, { useEffect, useState } from 'react';
import api from '@/services/api';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckButton = ({ id, reserva_checkin, reserva_checkout, props }: any) => {
    const reserva_id = id;
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const dateTime = today + ' ' + time;

    const check_in: any = {};
    const check_out: any = {};

    check_in.check_in = dateTime;
    check_out.check_out = dateTime;

    const disableIn = 'bg-gray-600 cursor-not-allowed';
    const disableOut = 'bg-gray-500 cursor-not-allowed';
    const ableIn = 'bg-green-700';
    const ableOut = ' bg-red-700 hover:bg-red-800 active:bg-red-900';

    let checkinStyle = reserva_checkin ? disableIn : ableIn;
    let checkoutStyle = reserva_checkout ? disableOut : ableOut;

    const RedirectToPagamento = withReactContent(Swal);
    const alert = withReactContent(Swal);

    const handleCheckIn = () => {
        if (reserva_checkin) {
            alert.fire({
                title: 'Não é possível registrar um Check In que já foi realizado',
                icon: 'warning'
            })

        } else {
            api.put(`/check-in/${reserva_id}`, check_in)
                .then((sucess) => {
                    console.log(sucess)
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    const handleCheckOut = () => {
        if (reserva_checkout) {
            alert.fire({
                title: 'Não é possível registrar um Check Out que já foi realizado',
                icon: 'warning'
            })
        } else {
            api.put(`/check-out/${reserva_id}`, check_out)
                .then((sucess) => {
                    RedirectToPagamento.fire({
                        icon: 'success',
                        title: 'Check Out Realizado Com Sucesso!. Gostaria de ir para o pagamento?',
                        showConfirmButton: true,
                        confirmButtonText: 'Sim',
                        showDenyButton: true,
                        denyButtonText: 'Não'
                    }).then((result: any) => {
                        if (result.isConfirmed) {
                            window.location.href = '/app/pagamento'
                        }
                    });
                    console.log(sucess)
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
    // console.log(selectedOption);

    return (

        <div className="flex flex-col-1 justify-center">
            <button
                type='button'
                className={`uppercase w-auto p-3 rounded-l-lg cursor-pointer transition-transform transform  active:scale-95 py-2 px-4 ${checkinStyle} font-bold flex items-center justify-center `}
                onClick={handleCheckIn}
            >

                Check in <AiFillLike className="ml-2" />
            </button>

            <button
                value='Check out'
                type='button'
                className={`uppercase w-auto p-3 rounded-r-lg cursor-pointer transition-transform transform active:scale-95 py-2 px-4 ${checkoutStyle} font-bold flex items-center justify-center`}
                onClick={handleCheckOut}
            >
                <AiFillDislike className="mr-2" /> Check out
            </button>
        </div>
    );
};

export default CheckButton;
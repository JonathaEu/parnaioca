'use client';
import React, { useEffect, useState } from 'react';
import api from '@/services/api';


const CheckButton = () => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [status, setStatus] = useState(true);

    const Menus = ['', 'CHECK IN', 'CHECK OUT'];

    // useEffect(() => {
    //     const getStatus = async () => {
    //         const response = await api.get('/');
    //         setStatus(response.data.data);
    //         console.log(response);
    //     };
    //     getStatus();
    // }, []);


    const handleMenuClick = (menu) => {
        // if(selectedOption == 'CHECK IN'){
        //     api.
        // }
        // console.log(selectedOption);
        setSelectedOption(menu);
    };

    return (
        <button className="relative">
            <div onClick={() => setOpen(!open)} className="flex">
                <h5
                    className={`font-bold ${Menus ? '' : 'bg-red-500'}`}>
                    {selectedOption || 'SITUAÇÃO'}
                </h5>
                <span className=" pl-2">
                    ▼
                </span>
            </div>
            {
                open &&
                <div
                    className="
                    bg-slate-300 text-black
                    p-1 w-32 shadow-lg rounded-sm
                    absolute -left-2 border-slate-500 border
                "
                >
                    <ul>
                        {Menus.map((menu) => (
                            <li
                                className="
                                p-1 text-sm cursor-pointer
                                rounded-2 hover:bg-[#11182767]
                                hover:text-[#CBD5E1] rounded-sm
                                font-semibold uppercase
                            "
                                key={menu}
                                onClick={() => handleMenuClick(menu)}
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </button>
    );
};

export default CheckButton;
'use client'
import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const searchBar = () => {

    const [searchBar, setSearchBar] = useState([]);

    const handleSearch = (e :any) => {
        if (e.target.value == '') {
            setSearchBar([])
            return false
        }
        setSearchBar(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }


    return (
        <div
            className="
        items-center flex 
        justify-center w-full
        ">
            <form className="
        w-[440px] relative
        ">
                <div className="relative">
                    <input

                        type="search"
                        placeholder='Pesquise aqui'
                        className="
                    w-full p-2 
                    rounded-full bg-slate-800
                    hover:bg-gray-500"
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
            </form>

            <div className="p-2">
                <button
                    className="
                    p-[12px] w-30
            rounded-full
            bg-[#8BC53E]
            hover:bg-[#2a341d]
            hover:transition-all
            text-2x1 text-black
            hover:text-white
            active:bg-[#24100D]
            active:scale-75 py-3 px-3
            uppercase
            ">
                    <BiSearchAlt />
                </button>

                {
                    searchBar.length > 0 && (
                        <div
                            className="
                            absolute top-20 p-4 bg-slate-800
                            text-white w-full rounded-xl
                            left-1/2 -translate-x-1/2 flex flex-col
                            gap-2
                            ">
                            {
                                searchBar.map(s => (
                                    <span key={s}></span>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>


    )

}

export default searchBar;
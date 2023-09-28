'use client'
import React, { useEffect, useState } from 'react';
import ModalItens from '@/app/modals/modalItens';
import api from '@/services/api';

const FrigobarModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const frigobarItens = ["Item 1", "Item 2", "Item 3"];

  const openModalItens = () => {
    setIsOpen(true);
  };

  const closeModalItens = () => {
    setIsOpen(true);
  };

  const [itens, setItens] = useState([]);
  useEffect(() => {
    const getItens = async () => {
      const response = await api.get('/estoque');
      setItens(response.data.data);
      // console.log(response.data.data);
    };
    getItens();
  }, []);


  return (

    <div className="flex flex-col items-center justify-center">
      <button onClick={openModalItens}
        className="
        fixed-button
        bg-[#111827]
        text-gray-200 hover:bg-[#374151]
        hover:text-gray-300 shadow-black
         rounded-md cursor-pointer
        transition-transform transform 
        text-semibold active:text-semibold
        active:scale-95 active:bg-[#DCDCDC]
        active:text-black uppercase
        border border-slate-300 text-sm p-1
      ">
        <details>
          <summary>
            Itens
          </summary>
          {itens.map((itens: any) => {
            return (

              <>
                <option value={itens.id}
                  className="
                bg-slate-200 
                transition-transform transform 
                border-slate-300
                
                ">

                  <ModalItens
                    isOpen={isOpen}
                    closeModal={closeModalItens}
                    itens={itens}
                  />
                </option>
              </>
            )
          })}
        </details>
      </button>
    </div>
  );
};

export default FrigobarModal;
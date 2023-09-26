import React, { useEffect, useState } from 'react';

function Galeria({ mainImage, images, modalOpen, closeModal, onClose, isOpen }: any) {


  useEffect(() => {
    console.log(images)

  }, []);


  return (
    <div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white pt-10 p-4 rounded-lg border-red-800">

            <div className="grid grid-cols-3 gap-2 mt-4	">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Imagem ${index + 1}`}
                  className="cursor-pointer w-72 hover:opacity-80 transition-opacity hover:zoom-on-hover"
                  onClick={() => image}
                />
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-4 px-3 py-1 bg-lime-800 text-white text-bold hover:bg-lime-900 mb-5 ml-3 rounded-full"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;
import React, { useState } from 'react';
import ItensFrigobarModal from '@/app/modals/itensFrigobarModal';
import visualizar from '../../../../../public/assets/visao.png';

const FrigobarModal = () => {
  const [showModal, setShowModal] = useState(false);
  const frigobarItems = ['Item 1', 'Item 2', 'Item 3'];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <button className="mt-1" onClick={handleOpenModal}>
        <img src={visualizar.src} alt="visualizar" 
        className="w-8 invert flex items-center justify-center"/>
      </button>

      {showModal && (
        <ItensFrigobarModal items={frigobarItems} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FrigobarModal;
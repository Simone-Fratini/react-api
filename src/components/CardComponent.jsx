import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardComponent({ id, name, img, content, price, onDeleteDish }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/food/${id}`);
  };


  return (
    <div className={`bg-[#150050] text-white rounded-lg shadow-lg p-6 max-w-sm cursor-pointer hover:animate-pulseScale`}>
    <div onClick={handleClick}>
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      
      <h2 className="text-2xl font-bold text-[#edcaff] mb-2">{name}</h2>

      
      <p className="text-[#b26fe9] mb-4">{content}</p>

      
      <div className="text-lg font-semibold text-white mb-4">
        Price: €{price}
      </div>

    </div>
      <button
        onClick={onDeleteDish}
        className="bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300">
        Cancella
      </button>
      
      
    </div>
  );
}

export default CardComponent;

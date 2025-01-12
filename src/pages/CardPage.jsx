import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardPage() {
  const { id } = useParams(); 
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`) 
      .then((response) => setCardData(response.data))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  }, [id]);

  // Mostra un messaggio di caricamento
  if (!cardData) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#150050] text-white flex items-center justify-center p-6">
      <div className="bg-[#000000] p-8 rounded-lg shadow-lg max-w-lg">
        <img
          src={cardData.img}
          alt={cardData.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{cardData.name}</h1>
        <p className="mb-4">{cardData.content}</p>
        <div className="text-lg font-semibold mb-4">Price: €{cardData.price}</div>
      </div>
    </div>
  );
}

export default CardPage;

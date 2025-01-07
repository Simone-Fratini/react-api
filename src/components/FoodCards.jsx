import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FoodCards({ recipes, onRemoveRecipe }) {
  const [apiRecipes, setApiRecipes] = useState([]); 

  useEffect(() => {
    const fetchApiRecipes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/posts');
        setApiRecipes(response.data.data);
      } catch (err) {
        console.error('Errore durante il recupero dei dati dall\'API', err);
      }
    };

    fetchApiRecipes();
  }, []); // Effettua la chiamata 

  const allRecipes = [...recipes, ...apiRecipes]; // Combina i dati dell'api cosi da fare il display di tutto

  return (
    <div className="flex flex-wrap justify-center gap-4 py-11">
      {allRecipes.map((food, index) => (
        <div
          key={`recipe-${index}`} // dato che gli indici possono essere uguali aggiungo un prefisso
          className="relative bg-white shadow-2xl rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-3 hover:animate-grow overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
            <img
              src={food.img}
              alt={food.name || food.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-4">
            <h2 className="text-center font-bold text-xl">{food.name || food.title}</h2>
            <p className="pt-4">
              <strong>Ingredients:</strong> {(food.ingredients || food.tag || []).join(', ')}.
            </p>
            <p className="pt-3">
              <strong>{food.cookingTime ? 'Cooking Time:' : 'Price:'}</strong>{' '}
              {food.cookingTime || `€${food.price}`}.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => onRemoveRecipe(food.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCards;

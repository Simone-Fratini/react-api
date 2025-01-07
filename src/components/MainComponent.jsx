import { useState } from 'react';
import FoodCards from './FoodCards.jsx';
import RecipeForm from './RecipeForm.jsx';
import foods from '../data/foods.jsx';

function MainComponent() {
  const [recipes, setRecipes] = useState(foods);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  const removeRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <main className="container mx-auto">
      <RecipeForm onAddRecipe={addRecipe} />
      <FoodCards recipes={recipes} onRemoveRecipe={removeRecipe} />
    </main>
  );
}

export default MainComponent;

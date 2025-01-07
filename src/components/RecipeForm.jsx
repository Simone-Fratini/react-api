import { useState } from 'react';

function RecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    cookingTime: '',
    img: '',
    category: '',
    tags: {
      vegetarian: false,
      glutenFree: false,
      spicy: false,
      vegan: false,
    },
    isPublished: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name in formData.tags) {
      setFormData({
        ...formData,
        tags: {
          ...formData.tags,
          [name]: checked,
        },
      });
    } else if (name === 'isPublished') {
      setFormData({
        ...formData,
        isPublished: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.ingredients && formData.cookingTime) {
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split(',').map((ing) => ing.trim()),
      };
      onAddRecipe(newRecipe);
      setFormData({
        title: '',
        ingredients: '',
        cookingTime: '',
        img: '',
        category: '',
        tags: {
          vegetarian: false,
          glutenFree: false,
          spicy: false,
          vegan: false,
        },
        isPublished: false,
      });
    }
  };

  return (
    <form className="p-4 mt-5 bg-gray-100 rounded-lg mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Title</label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          className="w-full p-2 border rounded"
          value={formData.ingredients}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Cooking Time</label>
        <input
          type="text"
          name="cookingTime"
          className="w-full p-2 border rounded"
          value={formData.cookingTime}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Image URL</label>
        <input
          type="text"
          name="img"
          className="w-full p-2 border rounded"
          value={formData.img}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Category</label>
        <select
          name="category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Pasta">Pasta</option>
          <option value="Dessert">Dessert</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Main Course">Main Course</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Tags</label>
        <div>
          {Object.keys(formData.tags).map((tag) => (
            <label key={tag} className="mr-4">
              <input
                type="checkbox"
                name={tag}
                checked={formData.tags[tag]}
                onChange={handleChange}
              />{' '}
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Publish</label>
        <input
          type="checkbox"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;

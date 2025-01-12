import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PostForm() {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    price: '',
    img: '',
  });

  const [sendData, setSendData] = useState(0)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    axios
        .post('http://localhost:3000/posts', formData)
        .then((response) => {
            console.log(response);
            setSendData((sendData) => (sendData+=1))})
        .then(navigate('/food'))   
        .catch((error) => {
            alert(`Non siamo riusciamo a comunicare con il backend errore: ${error}`)
            setSendData((sendData) => (sendData += 1))
        })
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150050] via-[#3F0071] to-[#610094] text-white flex items-center justify-center">
      <div className="bg-[#000000] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Add New Post</h1>
        <form onSubmit={handleSubmit}>
            
          {/* Nome */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter the name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            />
          </div>

          {/* Descrizione */}
          <div className="mb-4">
            <label htmlFor='description' className="block mb-2 text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="content"
              required
              rows="4"
              placeholder="Enter a description"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            ></textarea>
          </div>

          {/* Prezzo */}
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 text-sm font-medium">
              Price (€)
            </label>
            <input
              id="price"
              name="price"
              required
              type="number"
              step="0.01"
              placeholder="Enter the price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            />
          </div>

          {/* URL Immagine */}
          <div className="mb-4">
            <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium">
              Image URL
            </label>
            <input
              id="imgUrl"
              required
              name="img"
              type="text"
              placeholder="Enter the image URL"
              value={formData.img}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            />
          </div>

          {/* Pulsante di Invio */}
          <button
            type="submit"
            className="w-full bg-[#610094] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#3F0071] transition-colors duration-300">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center">
      
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-[#b9a8e7] mb-4">Benvenuto su foody</h1>
        <p className="text-lg text-[#c783ff]">
          Scopri i piatti migliori nella nostra sezione food
        </p>
      </div>


      <div className="flex gap-6">
        <Link to="/food" className="bg-[#a848db] text-white py-2 px-6 rounded hover:bg-[#3F0071] transition-colors duration-300">
          Scopri ricette
        </Link>
        
      </div>
    </div>
  );
}

export default HomePage;

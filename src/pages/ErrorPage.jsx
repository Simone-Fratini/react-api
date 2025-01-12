import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {


  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150050] via-[#3F0071] to-[#610094] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#610094] mb-6">404</h1>
        <p className="text-2xl font-medium mb-4">Page Not Found</p>
        <p className="text-lg text-[#8b6faa] mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/"
          className="bg-[#610094] text-white py-2 px-6 rounded-lg font-bold hover:bg-[#3F0071] transition-colors duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

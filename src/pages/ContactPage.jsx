import React from 'react';

function ContactPage() {
  
    const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Inviato'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150050] via-[#3F0071] to-[#610094] text-white flex items-center justify-center">
      <div className="bg-[#000000] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-[#3F0071] text-white focus:outline-none focus:ring-2 focus:ring-[#610094]"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-[#610094] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#3F0071] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

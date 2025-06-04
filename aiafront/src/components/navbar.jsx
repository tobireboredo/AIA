import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">AI Assistant</h1>
        <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">Chatbot</li>
            <li className="p-4">About AIA</li>
        </ul>
    </div>
  );
};

export default Navbar;
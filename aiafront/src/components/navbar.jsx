import React from 'react'
import logo from '../png/AIA_logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between text-white -m4">
      <img src={logo} alt= "aialogo"></img>
        <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">Chatbot</li>
            <li className="p-4">About AIA</li>
        </ul>
    </div>
  );
};

export default Navbar;
import React from 'react'
import logo from '../png/AIA_logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between text-white -m4">
      <img src={logo} alt= "aialogo"></img>
      <button 
      style={{backgroundColor:'#273C5E'}} 
      className="text-white px-4 py-2 rounded-full" > Iniciar Sesión</button>
    </div>
  );
};

export default Navbar;
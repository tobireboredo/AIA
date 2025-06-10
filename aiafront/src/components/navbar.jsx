import React from 'react'
import logo from '../png/AIA_logo.png'
import imgdirectorio from '../png/imgdirectorio.png'
import tabinicio from '../png/tabinicio.png'

const Navbar = () => {
  return (
    <div className="flex justify-between text-white -m4">
      <img src={logo} alt= "aialogo"></img>
      
      <img src={imgdirectorio} alt= "imgdirectorio"
      className="absolute left-[137px] self-center top-[39px]"></img>
      
      <img src={tabinicio} alt= "tabinicio"
      className="absolute left-[183px] self-center top-0"></img>

      <button 
      style={{backgroundColor:'#273C5E', width: '162px', height: '39px'}} 
      className="text-white rounded-full self-center" > Iniciar Sesión</button>
    </div>
  );
};

export default Navbar;
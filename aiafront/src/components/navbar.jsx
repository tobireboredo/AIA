import React from 'react';
import logo from '../png/AIA_logo.png';
import imgdirectorio from '../png/imgdirectorio.png';

const Navbar = ({ visible }) => {
  return (
    <div
      className={`fixed w-full top-0 z-50 transition-transform duration-300 bg-white ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {}
        <div className="flex items-center gap-12">
          <img src={logo} alt="aialogo"/>
          <button className="mt-4" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src={imgdirectorio} alt="imgdirectorio" />
          </button>
        </div>

        {}
        <button
          style={{ width: '162px', height: '39px' }}
          className="inter-fuente text-white bg-[#273C5E] rounded-full mr-8"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Navbar;

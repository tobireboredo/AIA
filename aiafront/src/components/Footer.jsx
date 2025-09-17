import React from 'react';
import logo from '../png/AIA_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#273D5E] text-white py-12 px-6 w-full min-h-[120px] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
        
        {/* Logo */}
        <div className="flex">
          <img src={logo} alt="AIA Logo" className="h-16 w-auto" />
        </div>
        
        {/* Columnas */}
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="font-bold mb-4">Contactanos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mail</li>
              <li>Instagram</li>
              <li>Whatsapp</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Sobre nosotros</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Nuestro CV</li>
              <li>Conocenos</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer

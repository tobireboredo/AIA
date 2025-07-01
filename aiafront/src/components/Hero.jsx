import React from 'react';
import tabinicio from '../png/tabinicio.png';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-12 inter-fuente">
        <img src={tabinicio} alt="Imagen de inicio" className="w-full max-w-lg mb-8" />
      <h1 className="text-3xl md:text-4xl font-bold inter-fuente bold mb-4">
        Hace tu tiempo más eficaz,<br />sé más eficiente.
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Conectá tu cuenta de Google y empezá a usarlo.
        <br />
        AI Assistant te va a ayudar con la lectura, organización, redacción de mails y más.
        <br />
        ¿Qué estás esperando?
      </p>
      <button className="bg-[#273D5E] text-white px-6 py-3 rounded-lg text-sm font-semibold inter">
        Probá AI Assistant ↗
      </button>
    </div>
  );
};

export default Hero;

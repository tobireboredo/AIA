import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center text-center px-4 mt-24 inter-fuente">
      <h1 className="text-3xl md:text-4xl font-bold inter-fuente bold mb-4">
        Hace tu tiempo más eficaz,<br />sé más eficiente.
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Conectá tu cuenta de Google y empezá a usarlo.
        <br />
        AI Assistant te va a ayudar con la lectura, organización y redacción de mails.
        <br />
        ¿Qué estás esperando?
      </p>
      <button 
        onClick={() => navigate('/chatbot')}  
        className="bg-[#273D5E] text-white px-6 py-3 rounded-lg text-sm font-semibold inter">
        Probá AI Assistant ↗
      </button>
    </div>
  );
};

export default Hero;

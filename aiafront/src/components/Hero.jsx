import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../png/AIAGRANDE.png";
import fotoizquierda from "../png/fotoizquierda.png";
import fotoderecha from "../png/fotoderecha.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center text-center px-4 mt-24 inter-fuente">
      <img src={logo} alt="AIA Logo" className="w-[200px] md:w-[300px] mb-8" />
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

      <div className="text-left max-w-2xl text-gray-700 mt-32">
        <h2 className="text-2xl font-bold mb-2 text-center">¿Qué es AI Assistant?</h2>
        <div className="bg-[#273D5E] text-white p-6 rounded-lg mb-8">
          <p className="font-inter">
            AI Assistant es una plataforma web innovadora que incorpora inteligencia artificial para mejorar la experiencia del usuario en la gestión de correos electrónicos. Su principal función es organizar, clasificar y priorizar los mensajes de manera automatizada, adaptándose a las necesidades y preferencias específicas de cada usuario. Esta herramienta resulta especialmente útil para quienes reciben grandes volúmenes de correos diariamente, ya que permite optimizar tiempos y reducir la sobrecarga de información. Además, AI Assistant incluye un chatbot inteligente con el que el usuario puede interactuar para obtener información detallada sobre sus correos. Esta inteligencia artificial va a poder funcionar mediante la vinculación de la cuenta de Google a la página web.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-2 mt-8 font-inter text-center">¿A quién está orientado AI Assistant?</h2>

        <div className="bg-[#273D5E] text-white p-6 rounded-lg">
          <p className="font-inter">
            AI Assistant está orientado a empleados que deben gestionar un alto volumen de correos electrónicos en su jornada laboral, especialmente aquellos que se interactúan con múltiples equipos de trabajo. Resulta particularmente útil para profesionales que requieren llevar a cabo varios proyectos de forma simultánea que colaboran con una misma empresa, ya que les permite mantener una comunicación más organizada y eficiente.
          </p>
        </div>
      </div>

      <div className="bg-[#273D5E] w-full h-[500px] mt-16 rounded-lg flex flex-col md:flex-row justify-around items-center h-[500px] px-8 gap-8">
        {/* Primer rectángulo blanco */}
        <div className="bg-white h-[300px] rounded-lg shadow-lg p-6 flex-1 max-w-xl text-gray-800">

          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full overflow-hidden border-2 border-[#273D5E]">
            <img src={fotoizquierda} alt="Foto izquierda" className="w-full h-full object-cover" />
          </div>

        <button className="text-2xl font-bold mb-4 mt-4">Leer reseña completa</button>
          <p className="text-xl mt-12">
          “Desde que implementamos esta solucion, redujimos un 40% de tiempo que invertiamos en tareas manuales. Ahora podemos enforcarnos en lo estrategico”          </p>
        </div>

        {/* Segundo rectángulo blanco */}
        <div className="bg-white h-[300px] rounded-lg shadow-lg p-6 flex-1 max-w-xl text-gray-800">
          <p className="text-xl mt-4">
          “Lo que mas nos impresiono  fue la interfaz intuitiva y la capacidad de adaptacion. No tuvimos que cambiar demasiado nuestros procesos existentes”          </p>
          <button className="text-2xl font-bold mb-4 mt-12">Leer reseña completa</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

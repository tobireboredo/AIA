import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../png/AIAGRANDE.png";
import fotoizquierda from "../png/fotoizquierda.png";
import fotoderecha from "../png/fotoderecha.png";
import logoGoogle from "../png/logoGoogle.png";
import logoGmail from "../png/logoGmail.png";
import iconoCarpeta from "../png/iconoCarpeta.png";
import iconoTexto from "../png/iconoTexto.png";
import iconoInfo from "../png/iconoInfo.png";
import Footer from './Footer';

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
        <div className="bg-white h-[300px] rounded-lg shadow-lg p-6 flex-1 max-w-xl text-gray-800 relative">

          <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full overflow-hidden border-2 border-[#273D5E]">
            <img src={fotoizquierda} alt="Foto izquierda" className="w-full h-full object-cover" />
          </div>

        <button className="text-2xl font-bold mb-4 mt-4">Leer reseña completa</button>
          <p className="text-xl mt-12">
          “Desde que implementamos esta solucion, redujimos un 40% de tiempo que invertiamos en tareas manuales. Ahora podemos enforcarnos en lo estrategico”          </p>
        </div>

        <div className="bg-white h-[300px] rounded-lg shadow-lg p-6 flex-1 max-w-xl text-gray-800 relative">
        
        <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full overflow-hidden border-2 border-[#273D5E]">
            <img src={fotoderecha} alt="Foto derecha" className="w-full h-full object-cover" />
        </div>
          <p className="text-xl mt-4">
          “Lo que mas nos impresiono  fue la interfaz intuitiva y la capacidad de adaptacion. No tuvimos que cambiar demasiado nuestros procesos existentes”          </p>
          <button className="text-2xl font-bold mb-4 mt-12">Leer reseña completa</button>
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold mb-8 mt-24">¿Cómo funciona AI Assistant?</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
        <div className="md:w-1/2 text-gray-700 text-justify inter-fuente">
          <p className="mb-6">
            AI Assistant funciona mediante un sistema de inteligencia artificial que se conecta de forma segura con la cuenta de Gmail del usuario a través de los servicios de Google. Una vez establecida la conexión, la IA analiza los correos electrónicos recibidos y, utilizando distintos prompts, los clasifica automáticamente según su contenido.
          </p>
          <p className='mt-16'>
            Además, permite al usuario visualizar y gestionar sus correos directamente desde nuestra plataforma, de manera organizada, rápida e intuitiva.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col items-center gap-12">
          <img src={logoGoogle} alt="Logo Google" className="w-auto h-auto" />
          <img src={logoGmail} alt="Logo Gmail" className="w-auto h-auto" />
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold mb-8 mt-24">¿Que funciones va a cumplir AI Assistant?</h2>
     
      <div className="flex items-center justify-between gap-8 mt-16">
        <p className="flex-1 font-bold text-gray-900 text-left max-w-[450px]">
          AI Assistant analiza información la de los mails, y ayuda a buscar esta información mediante un chatbot.
        </p>
        <img src={iconoInfo} alt="Icono información" className="w-16 h-16 object-contain" />
      </div>

      <div className="flex items-center justify-between gap-8 mt-16">
        <p className="flex-1 font-bold text-gray-900 text-left max-w-[450px]">
          Al analizar los mails, AI Assistant brinda la información de estos y también ayuda con la redacción de los mails.
        </p>
        <img src={iconoTexto} alt="Icono lista" className="w-16 h-16 object-contain" />
      </div>

      <div className="flex items-center justify-between gap-8 mt-16">
        <p className="flex-1 font-bold text-gray-900 text-left max-w-[450px]">
          Al iniciar sesión lo primero que se pide es crear carpetas donde se van a seccionar los mails, donde se van a poder acceder a estos desde la página web.
        </p>
        <img src={iconoCarpeta} alt="Icono carpeta" className="w-16 h-16 object-contain" />
      </div>
      <div className="w-full h-full mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;

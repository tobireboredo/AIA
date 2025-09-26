import React, { useState } from 'react'
import logo from '../png/AIAGRANDE.png';
import googleLogo from '../png/Google.png'; 

const Login = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState("");

  const handleContinuar = () => {
    if (!nombre.trim() || !apellido.trim()) {
      setError("Debes completar nombre y apellido");
    } else {
      setError(""); // limpiar error
      // Acá iría tu lógica si todo está bien (ej: enviar datos, pasar de pantalla, etc.)
      console.log("Nombre:", nombre, "Apellido:", apellido);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col justify-center items-center pt-2">
      <img
        src={logo}
        alt="logo"
        style={{ width: '244px', height: '148px' }}
        className="mt-2"
      />
      <span className="inter-fuente bold mt-8 text-base text-gray-800">
        Iniciar sesión
      </span>

      {/* Botón Google */}
      <button
        className="mt-6 flex items-center w-[400px] h-[40px] bg-white shadow-md hover:bg-gray-200 rounded-lg transition duration-200"
      >
        <img
          src={googleLogo}
          alt="Google"
          className="ml-4 w-6 h-6"
        />
        <span className="flex-1 text-center text-gray-700 font-medium">
          Continuar con Google
        </span>
      </button>

      {/* Línea */}
      <hr className="mt-8 w-[140px] border-t-2 border-black" />

      <span className="inter-fuente bold mt-8 text-base text-gray-800">
        Registrarse
      </span>

      {/* Mensaje de error */}
      {error && (
        <div className="mt-4 text-red-600 font-semibold">
          {error}
        </div>
      )}

      {/* Formulario Registro */}
      <div className="mt-4 flex flex-col items-center w-[400px]">
        <input
          type="text"
          placeholder="Nombre..."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full h-[45px] mb-4 px-4 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Apellido..."
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="w-full h-[45px] mb-4 px-4 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={handleContinuar}
          className="w-40 h-[45px] bg-[#1e3a8a] text-white font-semibold rounded-md shadow-md hover:bg-[#162c63] transition duration-200"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Login

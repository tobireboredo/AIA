import React from 'react'
import logo from '../png/AIAGRANDE.png';
import googleLogo from '../png/Google.png'; 

const Login = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-10">
      <img
        src={logo}
        alt="logo"
        style={{ width: '244px', height: '148px' }}
        className="mt-18"
      />
      <span className="inter-fuente bold mt-10 text-base text-gray-800">
        Iniciar sesión
      </span>

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
    </div>
  )
}

export default Login

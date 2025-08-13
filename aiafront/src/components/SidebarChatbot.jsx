import React, { useState } from "react";
import imgdirectorio from '../png/imgdirectorio.png';
import logo from '../png/AIA_logo.png'; // Asegurate que la ruta sea correcta

const SidebarChatbot = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 text-black flex flex-col justify-between
        transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-16"}
        min-h-screen
        shadow
      `}
      style={{
        backgroundColor: 'white',
        backgroundImage: expanded ? 'linear-gradient(to right, #EFEFEF, transparent)' : 'none',
      }}
    >
      <div
        className={`flex items-center pt-4 px-4 ${
          expanded ? 'justify-between' : 'flex-col items-center space-y-4'
        }`}
        style={{ minHeight: '3rem', position: 'relative' }}
      >
        {/* Logo solo cuando está expandida, a la izquierda */}
        {expanded && (
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        )}

        {/* Botón toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="focus:outline-none"
          aria-label="Expandir o contraer sidebar"
        >
          <img src={imgdirectorio} alt="Toggle Sidebar" className="w-8 h-8 object-contain" />
        </button>

        {/* Lupa solo cuando está contraída */}
        {!expanded && (
          <button
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Buscar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#A2A2A2"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        )}
      </div>

      {/* Contenido */}
      <nav className="flex-1 p-4">
        {expanded ? (
          <ul>
            <li className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded text-black">Chat 1</li>
            <li className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded text-black">Chat 2</li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
};

export default SidebarChatbot;

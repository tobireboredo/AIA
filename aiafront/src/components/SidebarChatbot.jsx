import React, { useState } from "react";
import imgdirectorio from '../png/imgdirectorio.png';

 const SidebarChatbot = () => {
 const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 bg-white text-white flex flex-col justify-between
        transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-16"}
        min-h-screen
        shadow
      `}
    >
      {/* Botón para expandir/contraer arriba */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="m-4 focus:outline-none"
        aria-label="Expandir o contraer sidebar"
      >
        <img src={imgdirectorio} alt="Toggle Sidebar" className="" />
      </button>

      {/* Espacio para contenido, puedes poner menú aquí */}
      <nav className="flex-1 p-4">
        {expanded ? (
          <ul>
            <li className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded">Chat 1</li>
            <li className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded">Chat 2</li>
            {/* Más items aquí */}
          </ul>
        ) : (
          // Cuando está contraído, muestra solo iconos (ejemplo)
          <ul className="flex flex-col items-center space-y-4 mt-10">
            <li className="cursor-pointer hover:text-blue-400">
              {/* Icono simple */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </li>
            <li className="cursor-pointer hover:text-blue-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </li>
          </ul>
        )}
      </nav>

      {/* Botón con lupa abajo, visible solo cuando sidebar está contraído */}
      {!expanded && (
        <button
          className="m-4 p-2 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none self-center"
          aria-label="Buscar"
        >
          {/* Icono lupa */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
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
  );
};

export default SidebarChatbot;

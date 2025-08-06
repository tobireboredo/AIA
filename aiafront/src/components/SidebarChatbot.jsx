import React, { useState } from "react";
import imgdirectorio from '../png/imgdirectorio.png';

const SidebarChatbot = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 bg-white text-black flex flex-col justify-between
        transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-16"}
        min-h-screen
        shadow
      `}
    >
      {/* Contenedor superior para botones */}
      <div
        className={`
          flex
          ${expanded ? 'justify-end pr-4' : 'flex-col items-center space-y-4'}
          items-center
          pt-4
        `}
        style={{ minHeight: '3rem' }}
      >
        {/* Toggle button siempre */}
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
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default SidebarChatbot;

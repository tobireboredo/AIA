import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import imgdirectorio from '../png/imgdirectorio.png';
import logo from '../png/AIA_logo.png';

const SidebarChatbot = ({ onWidthChange }) => {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (onWidthChange) {
      onWidthChange(expanded ? 256 : 64); // 256px = w-64, 64px = w-16
    }
  }, [expanded, onWidthChange]);

  return (
    <div
      className={`fixed top-0 left-0 text-black flex flex-col justify-between
        transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-16"}
        min-h-screen shadow`}
      style={{
        backgroundColor: "white",
        backgroundImage: expanded
          ? "linear-gradient(to right, #EFEFEF, transparent)"
          : "none",
      }}
    >
      <div
        className={`flex items-center pt-4 px-4 ${
          expanded ? "justify-between" : "flex-col items-center space-y-4"
        }`}
        style={{ minHeight: "3rem", position: "relative" }}
      >
        {expanded && (
          <Link to="/inicio">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </Link>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="focus:outline-none"
          aria-label="Expandir o contraer sidebar"
        >
          <img
            src={imgdirectorio}
            alt="Toggle Sidebar"
            className="w-8 h-8 object-contain"
          />
        </button>
      </div>

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

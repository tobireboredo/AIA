// App.js
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarChatbot from './components/NavbarChatbot';
import Hero from './components/Hero';
import ChatbotMain from './components/ChatbotMain';
import SidebarChatbot from './components/SidebarChatbot';
import Login from './components/Login';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const threshold = 17;
  const location = useLocation(); // ✅ Se movió aquí porque ya no hay Layout separado
  const navigate = useNavigate(); // ✅ Ya funciona porque App está dentro de <Router> (desde index.js)
  useEffect(() => {
    // Oculta navbar solo en /login/auth
    if (location.pathname === '/login/auth') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
            ticking.current = false;
            return;
          }

          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setShowNavbar(false);
          } else if (currentScrollY < lastScrollY.current) {
            setShowNavbar(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Al hacer clic en login, ocultamos la navbar y navegamos a /login/auth
  const handleLoginClick = () => {
    setShowNavbar(false);
    navigate('/login/auth');
  };

  const isChatbot = location.pathname === '/chatbot'; // ✅ Se usa aquí en vez de pasar a Layout
  const [sidebarWidth, setSidebarWidth] = useState(256);

  return (
    <div className="p-6 min-h-screen bg-[#FFFFFF]">
      {/* ✅ Navbar condicional según la ruta */}
      {isChatbot
        ? <NavbarChatbot visible={showNavbar} />
        : <Navbar visible={showNavbar} />
      }

      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Hero />} />
        <Route
          path="/chatbot"
          element={
            <div className="min-h-screen">
              <SidebarChatbot onWidthChange={setSidebarWidth} />
              <ChatbotMain sidebarWidth={sidebarWidth} />
            </div>
          }
        />
        <Route path="/login/auth" element={<Login />} setShowNavbar useState={false}/>
      </Routes>
    </div>
  );
}

export default App;
 
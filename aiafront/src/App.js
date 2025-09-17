import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarChatbot from './components/NavbarChatbot';
import Hero from './components/Hero';
import ChatbotMain from './components/ChatbotMain';
import SidebarChatbot from './components/SidebarChatbot';
import Footer from './components/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const threshold = 17;

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

  return (
    <Router>
      <div className="p-6 min-h-screen bg-[#FFFFFF]">
        <Layout showNavbar={showNavbar} />
      </div>
    </Router>
  );
}

const Layout = ({ showNavbar }) => {
  const location = useLocation();
  const isChatbot = location.pathname === '/chatbot';

  // 👇 definimos el estado para el ancho de la sidebar
  const [sidebarWidth, setSidebarWidth] = useState(256);

  return (
    <>
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
      </Routes>
    </>
  );
};

export default App;

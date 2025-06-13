import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const threshold = 10; // píxeles mínimos para detectar cambio

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Si el scroll cambió menos que el threshold, no hacemos nada
          if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
            ticking.current = false;
            return;
          }

          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            // Scroll hacia abajo y más de 50px ocultar navbar
            setShowNavbar(false);
          } else if (currentScrollY < lastScrollY.current) {
            // Scroll hacia arriba mostrar navbar
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
    <div className="pt-20 p-6 min-h-screen bg-[#FFFFFF]">
      <Navbar visible={showNavbar} />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-800 text-lg leading-7">
          {Array(100)
            .fill(
              'Este es un párrafo de ejemplo que se repite para simular contenido desplazable. '
            )
            .join('')}
        </p>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./Step1Welcome.css";

export default function Step0Initial({ next }) {
  const [showLogos, setShowLogos] = useState(true);

  useEffect(() => {
    // 1️⃣ Muestra los logos por 3 segundos
    const logoTimer = setTimeout(() => setShowLogos(false), 3000);

    // 2️⃣ Luego, después de mostrar el texto 3 segundos más, avanza al siguiente paso
    const nextTimer = setTimeout(() => {
      if (!showLogos) next();
    }, 3000); // total: 3s logos + 3s texto

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(nextTimer);
    };
  }, [showLogos, next]);

  return (
    <div className="welcome-container">
      {/* Logo superior derecho */}
      <div className="welcome-header">
        <img
          src="/src/assets/logos/Logo Moneda - Tu Casa.png"
          alt="logo tu casa tu futuro"
        />
      </div>

      {/* Transición: logos → texto */}
      <div
        className={`welcome-transition ${showLogos ? "show-logos" : "show-text"}`}
      >
        {showLogos ? (
          <div className="welcome-content0">
            <div className="welcome-image0">
              <img
                src="/src/assets/Logos/Logo Tu casa Tu Futuro.png"
                alt="Logo Tu casa Tu Futuro"
              />
            </div>

            <div className="welcome-image1">
              <img
                src="/src/assets/Logos/Logo C&W Horizontal.png"
                alt="Logo C&W Horizontal"
              />
            </div>
          </div>
        ) : (
          <div className="welcome-message">
            ¡En <span>Crepes & Waffles</span> <br />
            queremos ayudarte a cumplir <br />
            tus metas y objetivos!
          </div>
        )}
      </div>
    </div>
  );
}

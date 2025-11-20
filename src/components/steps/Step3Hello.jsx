import React, { useEffect, useState } from "react";
import "./Step3Hello.css";

export default function Step3Hello({ data, next }) {
  const [name, setName] = useState(data.name || "USUARIO");

  useEffect(() => {
    const fetchName = async () => {
      try {
        console.log("🔍 Consultando API con el documento:", data.document);

        const response = await fetch(
          `https://apialoha.crepesywaffles.com/intellinext2?dui_person=${data.document}`
        );

        const raw = await response.json();

        console.log("📨 Respuesta completa de la API:", raw);

        if (Array.isArray(raw) && raw.length > 0) {
          const fullName =
            raw[0].full_name ||
            raw[0].NOMBRE ||
            "USUARIO";

          console.log("✅ Nombre encontrado:", fullName);

          setName(fullName);
        } else {
          console.warn("⚠ No se encontró información con ese documento.");
          setName("USUARIO");
        }
      } catch (error) {
        console.error("💥 Error consultando API:", error);
        setName("USUARIO");
      }
    };

    fetchName();
  }, [data.document]);

  const nameToDisplay = name.toUpperCase();

  return (
    <div className="step3-container">
      <div className="step3-content">
        <h1 className="step3-title">¡HOLA, {nameToDisplay}!</h1>

        <p className="step3-message">
          Tu sueño de tener vivienda está más cerca de ser una realidad.
          <br />
          Te invitamos a compartir tu información para que seas de los primeros en abrir la puerta a esta nueva oportunidad.
          <br />
          <strong>
            Prepárate… vienen sorpresas que podrán convertirse en la semilla de tu próximo hogar.
          </strong>
        </p>

        <div className="step3-button-wrapper">
          <button onClick={next} className="step3-button">
            Empecemos
          </button>
        </div>
      </div>
    </div>
  );
}

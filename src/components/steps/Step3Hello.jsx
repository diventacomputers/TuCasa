import React, { useEffect, useState } from "react";
import "./Step3Hello.css";

export default function Step3Hello({ data, next }) {

  const [name, setName] = useState("USUARIO");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {

    const fetchNameFromAloha = async () => {
      try {
        const response = await fetch(
          `https://apialoha.crepesywaffles.com/intellinext2?dui_person=${data.document}`
        );

        const raw = await response.json();

        console.log("📨 API ALOHA:", raw);

        if (Array.isArray(raw) && raw.length > 0) {
          const fullName =
            raw[0].full_name ||
            raw[0].NOMBRE ||
            "USUARIO";

          setName(fullName);
        }
      } catch (error) {
        console.error("❌ Error API Aloha:", error);
      }
    };


    const fetchEmployeeFromBUK = async () => {
      try {
        const response = await fetch(
          `https://crepesywaffles.buk.co/api/v1/colombia/employees?page_size=500&document_number=${data.document}`,
          {
            headers: {
              Accept: "application/json",
              auth_token: "tmMC1o7cUovQvWoKhvbdhYxx",
            },
          }
        );

        const buk = await response.json();

        console.log("📸 API BUK:", buk);

        if (buk?.data?.length > 0) {
          const empleado = buk.data[0];

          // Nombre más confiable desde BUK
          if (empleado.full_name) {
            setName(empleado.full_name);
          }

          // FOTO profesional desde picture_url
          if (empleado.picture_url) {
            setPhoto(empleado.picture_url);
          }
        } else {
          console.warn("⚠ No se encontró el empleado en BUK.");
        }

      } catch (error) {
        console.error("❌ Error API BUK:", error);
      }
    };


    fetchNameFromAloha();
    fetchEmployeeFromBUK();

  }, [data.document]);


  const nameToDisplay = name.toUpperCase();

  return (
    <div className="step3-container">
      <div className="step3-content">

        {/* FOTO DEL EMPLEADO */}
        <div className="step3-photo-wrapper">
          <img
            src={
              photo ||
              "/src/assets/Personajes/default-avatar.png"
            }
            alt="Foto empleado"
            className="step3-photo"
          />
        </div>

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

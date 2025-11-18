import React, { useState } from "react";
import "./Step10Extras.css";

export default function Step10Extras({ data, update, next, prev }) {
  
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    update({ extrasChoice: true });
    next();
  };

  return (
    <div className="step10-page">

      {/* IZQUIERDA – PERSONAJE */}
      <div className="left-column-10">
        <img
          src="/src/assets/Personajes/Personaje 7.png"
          alt="Personaje animado"
          className="personaje-step10"
        />
      </div>

      {/* DERECHA – CONTENIDO */}
      <div className="right-column-10">

        {/* BURBUJA */}
        <div className="speech-bubble-10">
          <div className="speech-bubble-thought"></div>
          ¡Estás a un paso de adquirir tu vivienda!
        </div>

        <h3 className="extras-title">
          Recuerda tener presente gastos adicionales como:
        </h3>

        <ul className="extras-list">
          <li>• Pago de escrituras</li>
          <li>• Remodelación</li>
          <li>• Mudanza</li>
        </ul>

        {/* BOTÓN COMO IMAGEN */}
        <img
          src="/src/assets/Botones Click/Click 4.png"
          alt="Opciones para pagos adicionales"
          className="opciones-image"
          onClick={openModal}
        />

        <div className="bottom-buttons-10">
          <button className="btn-volver10" onClick={prev}>Volver</button>
          <button className="btn-siguiente10" onClick={next}>Siguiente</button>
        </div>
      </div>


      {/* ===================== MODAL NUEVO ===================== */}
      {modal && (
        <div className="modal-overlay-10">
          <div className="modal-box-10">

            <h2 className="modal-title-10">
              Opciones para pagos adicionales:
            </h2>

            <div className="modal-logos-10">
              <img src="/src/assets/Logos/Logo 5.png" alt="Davivienda" />
              <img src="/src/assets/Logos/Logo 2.png" alt="Cafam" />
              <img src="/src/assets/Logos/Logo 3.png" alt="Unimos" />
              <img src="/src/assets/Logos/Logo 4.png" alt="Compensar" />
            </div>

            <button className="modal-btn-10" onClick={() => setModal(false)}>
              Volver
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

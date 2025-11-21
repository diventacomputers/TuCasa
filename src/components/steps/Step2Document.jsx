import React, { useState } from 'react';
import './Step2Document.css';
import WomanIllustration from '../../assets/Personajes/Personaje 2.png';

export default function Step2Document({ data, update, next }) {
  const [doc, setDoc] = useState(data.document || '');
  const [error, setError] = useState('');
  const [alertData, setAlertData] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🟡 Consulta si ya existe registro en tu API real
  const checkIfExists = async (document) => {
  try {
    const url = `https://apialoha.crepesywaffles.com/intellinext2?dui_person=${document}`;
    const res = await fetch(url);
    const json = await res.json();

    console.log("Respuesta API:", json);

    // ✔ Tu API siempre responde un array → solo validamos el length
    return Array.isArray(json) && json.length > 0;
  } catch (err) {
    console.error("Error consultando API:", err);
    return false;
  }
};


  const handle = async () => {
    if (!doc || doc.length < 6) {
      setError('Ingresa un número de documento válido (mínimo 6 dígitos).');
      return;
    }

    setLoading(true);

    const exists = await checkIfExists(doc);

    setLoading(false);

    if (exists) {
      // Mostrar modal personalizado
      setAlertData({
        title: "Formulario Finalizado",
        message: `El documento ${doc} ya tiene un registro activo. 
No es posible volver a diligenciar el formulario.`,
        button: "Aceptar"
      });
      return;
    }

    // Si no existe → continuar flujo normal
    update({ document: doc });
    setError('');
    next();
  };

  return (
    <div className="step2-container">
      <img
        src={WomanIllustration}
        alt="Asesora de vivienda"
        className="step2-illustration"
      />

      <div className="dialog-box">
        <p className="dialog-small">Ingresa tu</p>
        <h1 className="dialog-title">número de documento</h1>

        <input
          className="dialog-input"
          type="number"
          value={doc}
          onChange={e => setDoc(e.target.value.replace(/\s/g, ''))}
          placeholder="Número de Documento"
        />

        {error && <div className="error-message">{error}</div>}

        <button onClick={handle} className="dialog-button" disabled={loading}>
          {loading ? "Verificando..." : "Continuar"}
        </button>
      </div>


      {/* ============================
            MODAL ALERT
      ============================= */}
      {alertData && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">{alertData.title}</h2>

            <p className="modal-message">
              {alertData.message}
            </p>

            <button
              className="modal-button"
              onClick={() => setAlertData(null)}
            >
              {alertData.button}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react'
import './Step7Types.css'

export default function Step7Types({ data, update, next, prev }) {

  const [alertData, setAlertData] = useState(null)
  const [userResponse, setUserResponse] = useState("")

  // Abre el modal y guarda el tipo seleccionado
  const showNoVisModal = (type) => {

    update({ typeOfHousing: type })

    setAlertData({
      title: "Tu historia importa: cuéntanos de ti",
      content: (
        <p>
          Queremos conocer a las personas detrás del esfuerzo. Cuéntanos en pocas palabras 
          por qué tu trabajo es excepcional. Es la oportunidad para que compartas cómo tu 
          dedicación ha hecho crecer no solo tu camino, sino también el de la empresa.
        </p>
      ),
      confirmText: "Volver",
      onConfirm: () => setAlertData(null)
    })
  }

  // 🔥 Enviar TODO a Strapi cuando presionan ENVIAR en el modal
 const handleSubmitResponse = async () => {
  // Guardar la respuesta del modal dentro del flujo global
  update({ userResponse });

  const payload = {
    data: {
      documento: Number(data.document),   // o data.documento
      res_v: {
        //  DATOS DEL PASO 4
        hasHome: data.hasHome,
        homeGoal: data.homeGoal,

        //  DATOS DEL PASO 7
        typeOfHousing: data.typeOfHousing,
        userResponse: userResponse
      }
    }
  };

  try {
    const res = await fetch(
      "https://macfer.crepesywaffles.com/api/cvivienas111-del-futuros",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await res.json();
    console.log("Envío unificado exitoso:", result);

    setUserResponse("");
    setAlertData(null);

    next();

  } catch (err) {
    console.error("Error enviando datos:", err);
  }
};


  return (
    <div className="step7-types">

      <h3>Acompañamos tu sueño en todas las etapas del camino:</h3>
      <p className="step7-subtitle">Escoge una opción de acuerdo en el proceso que estas:</p>

      <div className="grid sm:grid-cols-3 gap-6 mt-6">

        <div className="step7-card">
          <img src="/src/assets/Cajas/Caja 2.png" className="step7-icon" />
          <h4>Semilla de Vivienda</h4>
          <p>Para quienes están dando su primer paso.</p>
          <button onClick={() => showNoVisModal("semilla")} className="btn-house">
            Descubre proyectos inmobiliarios
          </button>
        </div>

        <div className="step7-card">
          <img src="/src/assets/Cajas/Caja 3_1.png" className="step7-icon" />
          <h4>Raíces del hogar</h4>
          <p>Para quienes ya tienen su sueño en proceso.</p>
          <button onClick={() => showNoVisModal("raices")} className="btn-house">
            Descubre opciones de vivienda usada
          </button>
        </div>

        <div className="step7-card">
          <img src="/src/assets/Cajas/Caja 4.png" className="step7-icon" />
          <h4>Cosechando frutos</h4>
          <p>Para quienes ya recibieron su vivienda en obra gris.</p>
          <button onClick={() => showNoVisModal("frutos")} className="btn-house">
            Descubre proyectos inmobiliarios
          </button>
        </div>

      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost7">Volver</button>
        <button onClick={next} className="btn-ghost7">Siguiente</button>
      </div>

      {/* MODAL */}
      {alertData && (
        <div className="alert-overlay">
          <div className="alert-box">

            <div className="modal-house-icon">
              <img src="/src/assets/Iconos/Icono 1.png" alt="Icono 1" />
            </div>

            <h3 className="alert-title">{alertData.title}</h3>

            <div className="alert-content">{alertData.content}</div>

            <div className="alert-input-wrapper">
              <input
                type="text"
                className="alert-input"
                placeholder="Escribe tu mensaje aquí..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
              />

              {/* POST */}
              <button className="btn-modal-submit" onClick={handleSubmitResponse}>
                Enviar
              </button>
            </div>

            <div className="alert-buttons">
              <button className="btn-modal-volver" onClick={alertData.onConfirm}>
                {alertData.confirmText}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

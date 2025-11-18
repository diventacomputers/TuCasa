import React, { useState } from 'react';
import './Step81Budget2.css';

export default function Step81Budget2({ data, update, next, prev }) {

  const [alertData, setAlertData] = useState(null);

  // Acción final después de confirmar dentro del modal
  const choose = (val) => { 
    update({ budgetStep81Choice: val });
    next();
  };

  // Modal para Cuota Inicial
  const handleCuotaInicialClick = () => {
    setAlertData({
      title: "Cuota inicial",
      message: (
        <>
          Podrás obtener asesoría para<br />
          tu <b>subsidio de arrendamiento</b><br />
          con los siguientes fondos:
        </>
      ),
      logos: [
        "/src/assets/Logos/Logo 1.png",
        "/src/assets/Logos/Logo 2.png",
        "/src/assets/Logos/Logo 3.png",
        "/src/assets/Logos/Logo 4.png"
      ],
      icon: "/src/assets/Iconos/Icono 3.png",
      onClose: () => setAlertData(null),
      onConfirm: () => {
        setAlertData(null);
        choose("cuota-inicial");
      }
    });
  };

  // Modal para Subsidios
  const handleSubsidiosClick = () => {
    setAlertData({
      title: "Subsidios",
      message: (
        <>
          Te ayudamos a conocer si puedes acceder<br />
          a un <b>subsidio estatal o de caja de compensación.</b>
        </>
      ),
      logos: [
        "/src/assets/Logos/Logo 1.png",
        "/src/assets/Logos/Logo 2.png",
        "/src/assets/Logos/Logo 3.png",
        "/src/assets/Logos/Logo 4.png"
      ],
      icon: "/src/assets/Iconos/Icono 3.png",
      onClose: () => setAlertData(null),
      onConfirm: () => {
        setAlertData(null);
        choose("subsidios");
      }
    });
  };

  // Modal para Crédito
  const handleCreditoClick = () => {
    setAlertData({
      title: "Crédito hipotecario",
      message: (
        <>
          Recibe orientación completa para solicitar tu<br />
          <b>crédito hipotecario</b> y mejorar tus opciones.
        </>
      ),
      logos: [
        "/src/assets/Logos/Logo 1.png",
        "/src/assets/Logos/Logo 2.png",
        "/src/assets/Logos/Logo 3.png",
        "/src/assets/Logos/Logo 4.png"
      ],
      icon: "/src/assets/Iconos/Icono 3.png",
      onClose: () => setAlertData(null),
      onConfirm: () => {
        setAlertData(null);
        choose("credito");
      }
    });
  };

  return (
    <div className="step81-page">

      {/* COLUMNA IZQUIERDA */}
      <div className="left-column">

        {/* SECCIÓN 1 */}
        <div className="section-block">
          <h2 className="section-title">Cuota<br/>inicial</h2>

          <div className="box-card" onClick={handleCuotaInicialClick}>
            <img
              src="/src/assets/cajas/Caja 5.png"
              className="box-image"
              alt="Caja cuota"
            />
            <p className="box-text">
              Quieres <b>iniciar con la compra de tu vivienda</b>, pero pagas
              arriendo y <b>no te alcanza para pagar cuota inicial.</b>
            </p>
          </div>
        </div>

        {/* SECCIÓN 2 */}
        <div className="section-block">
          <h2 className="section-title">Subsidios</h2>

          <div className="box-card" onClick={handleSubsidiosClick}>
            <img
              src="/src/assets/cajas/Caja 6.png"
              className="box-image"
              alt="Caja subsidios"
            />
            <p className="box-text box-text-dark">
              Tienes un proceso de compra de vivienda avanzado y quieres saber si puedes
              <b> acceder a algún subsidio o beneficio.</b>
            </p>
          </div>
        </div>

        {/* SECCIÓN 3 */}
        <div className="section-block">
          <h2 className="section-title">Crédito<br/>hipotecario</h2>

          <div className="box-card" onClick={handleCreditoClick}>
            <img
              src="/src/assets/cajas/Caja 7.png"
              className="box-image"
              alt="Caja crédito"
            />
            <p className="box-text">
              Requieres asesoría para solicitar <b>crédito hipotecario</b>,
              capacidad de endeudamiento, historial crediticio y otros.
            </p>
          </div>
        </div>

        {/* BOTONES */}
        <div className="bottom-buttons">
          <button className="btn-volverbud" onClick={prev}>Volver</button>
          <button className="btn-siguiente" onClick={next}>Siguiente</button>
        </div>
      </div>

      {/* COLUMNA DERECHA */}
      <div className="right-column">
        <div className="speech-bubble">
          ¡Te acompañamos en tu<br />planeación financiera!
        </div>

        <img
          src="/src/assets/Personajes/Personaje 6.png"
          className="person-illustration"
          alt="Personaje"
        />
      </div>

      {/* ===================== MODAL ===================== */}
      {alertData && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* ÍCONO CERDITO */}
            <img
              src={alertData.icon}
              className="modal-cerdito"
              alt="Cerdito"
            />

            <h2 className="modal-title">{alertData.title}</h2>

            <p className="modal-text">{alertData.message}</p>

            <div className="modal-logos">
              {alertData.logos.map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${index}`} />
              ))}
            </div>

            <button className="modal-btn" onClick={alertData.onClose}>
              Volver
            </button>

            <button className="modal-btn" onClick={alertData.onConfirm}>
              Continuar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

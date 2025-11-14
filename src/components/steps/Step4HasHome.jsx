import React from 'react';
import './Step4HasHome.css';

export default function Step4HasHome({ onChoose, prev }) {
  return (
    <div className="step4-wrapper">

      {/* Personaje */}
      <div className="step4-illustration">
        <img src="/src/assets/Personajes/Personaje 3.png" alt="Personaje" />

      </div>

  

      {/* Contenedor principal */}
      <div className="step4-card">

        {/* Pregunta 1 */}
        <h3 className="step4-question">
          1. ¿Actualmente cuentas con vivienda propia?
        </h3>

        <div className="step4-options">
          <button onClick={() => onChoose('si')} className="step4-option">a) Sí</button>
          <button onClick={() => onChoose('no')} className="step4-option">b) No</button>
          <button onClick={() => onChoose('parcialmente')} className="step4-option">
            c) Parcialmente (compartida, en proceso de compra, etc…)
          </button>
        </div>

        {/* Pregunta 2 */}
        <h3 className="step4-question mt-6">
          2. ¿Cuál sería tu objetivo principal respecto a vivienda?
        </h3>

        <div className="step4-options grid-2">
          <button onClick={() => onChoose('primera')} className="step4-option">
            a) Comprar mi primera vivienda
          </button>
          <button onClick={() => onChoose('mejorar')} className="step4-option">
            b) Mejorar mi vivienda actual
          </button>
          <button onClick={() => onChoose('zona')} className="step4-option">
            c) Cambiarme a una zona diferente
          </button>
          <button onClick={() => onChoose('subsidios')} className="step4-option">
            d) Acceder a subsidios / beneficios
          </button>
        </div>

        {/* Navegación */}
        <div className="step4-nav">
          <button onClick={prev} className="btn-back">Volver</button>
          <button onClick={() => onChoose('next')} className="btn-next">Siguiente</button>
        </div>

      </div>
    </div>
  );
}


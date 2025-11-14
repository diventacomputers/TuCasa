import React from 'react'
import './Step5Benefits.css'

import mejoraViviendaBox from '../../assets/Cajas/Caja 1.png'
import mejoraViviendaTool from '../../assets/Iconos/Icono 4.png'
import mejoraViviendaFolio from '../../assets/Iconos/Icono 5.png'
import mejoraViviendaMoney from '../../assets/Iconos/Icono 6.png'

export default function Step5Benefits({ next, prev }) {
  return (
    <div className="container-benefits">

      <h3 className="title-benefits">
        ¡Como ya cuentas con vivienda propia,
        <br />
        tenemos estos beneficios para ti!
      </h3>

      <div className="cards-grid">

        {/* Tarjeta 1 */}
        <div className="card">
          <img src={mejoraViviendaBox} className="card-box" />
          <img src={mejoraViviendaTool} className="card-icon" />
          <h4 className="card-title">Mejora de vivienda</h4>
          <p className="card-text">
            Conoce y solicita los subsidios para mejorar tu vivienda.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="card">
          <img src={mejoraViviendaBox} className="card-box" />
          <img src={mejoraViviendaFolio} className="card-icon" />
          <h4 className="card-title">Legalización de Documentos</h4>
          <p className="card-text">
            Pon al día tus escrituras, impuestos u otros documentos.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="card">
          <img src={mejoraViviendaBox} className="card-box" />
          <img src={mejoraViviendaMoney} className="card-icon" />
          <h4 className="card-title">Administración de viviendas</h4>
          <p className="card-text">
            Solicita información en caso de herencia o ayuda para sucesión.
          </p>
        </div>

      </div>

      <div className="controls">
        <button className="btn-back" onClick={prev}>Volver</button>
        <button className="btn-next" onClick={next}>Finalizar</button>
      </div>

    </div>
  )
}

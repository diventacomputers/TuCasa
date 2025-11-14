import React from 'react'
import './Step9Finance.css'

export default function Step9Finance({ data, next, prev }) {
  return (
    <div className="step9-finance">
      <h3 className="title">¡Hagamos cuentas!</h3>
      
      {/* Diagrama de la imagen */}
      <div className="finance-diagram">
        {/* Bloque superior */}
        <div className="block-top">
          100% del Valor total del inmueble
        </div>

        {/* Conectores */}
        <div className="connectors">
          <div className="line-h"></div>
          <div className="line-v-left"></div>
          <div className="line-v-right"></div>
        </div>

        {/* Bloques inferiores */}
        <div className="blocks-bottom">
          <div className="block-left">
            <span className="label">Cuota inicial</span>
            <span className="percentage-box initial-percentage">30%</span>
          </div>

          <div className="block-right">
            <span className="label">Crédito hipotecario</span>
            <span className="percentage-box credit-percentage">70%</span>
          </div>
        </div>
      </div>
      
      {/* Botón Volver (lo dejo fuera del contenedor de botones para que se parezca más a la imagen) */}
      <button onClick={prev} className="btn-volver">Volver</button>
      
      {/* El botón "Siguiente" no está en la imagen, pero lo mantengo oculto o lo elimino si solo quieres el diseño */}
      {/* <div className="mt-6">
          <button onClick={next} className="btn-primary">Siguiente</button>
      </div> */}
    </div>
  )
}
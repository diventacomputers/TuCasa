import React from 'react'

export default function Step10Extras({ data, next, prev }){
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold" style={{color:'#503629'}}>Opciones para pagos adicionales</h3>
      <ul className="list-disc pl-5 mt-2 text-sm">
        <li>Pago de escrituras</li>
        <li>Remodelación</li>
        <li>Mudanza</li>
      </ul>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={next} className="btn-primary">Continuar</button>
      </div>
    </div>
  )
}

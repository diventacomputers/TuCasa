import React from 'react'

export default function Step3Hello({ data, next }){
  // por ahora name viene en data.name (simulado)
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold" style={{color:'#503629'}}>¡HOLA, {data.name || 'SANTIAGO'}!</h3>
      <p>Empecemos. Desde el equipo de Bienestar, queremos hacerte unas preguntas que nos ayudarán a guiarte de forma personalizada en el proceso de compra de vivienda.</p>

      <div className="mt-6 flex justify-end">
        <button onClick={next} className="btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

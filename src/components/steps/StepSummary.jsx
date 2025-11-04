import React from 'react'

export default function StepSummary({ data, prev }){
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[--db]">Resumen de tus respuestas</h3>
      <pre className="bg-[--s2] p-3 rounded-md text-sm overflow-auto" style={{whiteSpace:'pre-wrap'}}>
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="flex justify-between items-center mt-3">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={()=>alert('Gracias. Envío simulado.')} className="btn-primary">Enviar</button>
      </div>
    </div>
  )
}

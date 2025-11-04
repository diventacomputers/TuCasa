import React from 'react'

export default function Step11Final({ data, prev }){
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold" style={{color:'#503629'}}>¡Estás a un paso de adquirir tu vivienda!</h3>
      <p className="text-sm">Si tienes dudas, escríbenos tocando los íconos de contacto o completa la solicitud en la oficina de Bienestar.</p>

      <div className="mt-3">
        <h4 className="font-semibold">Resumen rápido</h4>
        <pre className="bg-[--s2] p-3 rounded-md text-sm overflow-auto" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data,null,2)}</pre>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={()=>alert('Gracias. Envío simulado. Nos contactamos pronto.')} className="btn-primary">Finalizar</button>
      </div>
    </div>
  )
}

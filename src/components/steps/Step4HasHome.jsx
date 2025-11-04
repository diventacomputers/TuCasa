import React from 'react'

export default function Step4HasHome({ onChoose, prev }){
  return (
    <div className="space-y-4">
      <p className="text-base font-medium" style={{color:'#503629'}}>1. ¿Actualmente cuentas con vivienda propia?</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        <button onClick={()=>onChoose('si')} className="p-3 rounded-md border hover:shadow-sm text-left">a) Sí</button>
        <button onClick={()=>onChoose('no')} className="p-3 rounded-md border hover:shadow-sm text-left">b) No</button>
        <button onClick={()=>onChoose('parcialmente')} className="p-3 rounded-md border hover:shadow-sm text-left">c) Parcialmente (compartida, en proceso...)</button>
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <div className="text-sm opacity-70">Elige la opción que aplica</div>
      </div>
    </div>
  )
}

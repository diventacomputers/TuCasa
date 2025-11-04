import React from 'react'

export default function Step1Welcome({next}){
  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <img src="/src/assets/logo.png" alt="logo" className="w-20 h-20 object-contain" />
        <div>
          <h2 className="text-2xl font-bold" style={{color:'#503629'}}>¡En Crepes & Waffles queremos ayudarte a cumplir tus metas!</h2>
          <p className="text-sm opacity-80 mt-1">Empezar el proceso de compra de vivienda es un paso grande. Te guiamos.</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm">TU CASA, TU FUTURO</p>
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={next} className="btn-primary">Empezar</button>
      </div>
    </div>
  )
}

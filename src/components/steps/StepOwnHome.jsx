import React from 'react'

export default function StepOwnHome({ data, update, prev, next }){
  const choose = (val) => {
    update({ hasHome: val })
  }

  return (
    <div className="space-y-4">
      <p className="text-base font-medium text-[--db]">1. ¿Actualmente cuentas con vivienda propia?</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button onClick={()=>{choose('si'); next()}} className="p-3 rounded-md border hover:shadow-sm">
          a) Sí
        </button>
        <button onClick={()=>{choose('no'); next()}} className="p-3 rounded-md border hover:shadow-sm">
          b) No
        </button>
        <button onClick={()=>{choose('parcialmente'); next()}} className="p-3 rounded-md border hover:shadow-sm">
          c) Parcialmente (compartida, en proceso...)
        </button>
      </div>
      <div className="mt-2 text-sm text-[--db] opacity-70">Elige la que aplica. Si ya tienes vivienda, te mostraremos opciones para mejora y subsidios.</div>
    </div>
  )
}

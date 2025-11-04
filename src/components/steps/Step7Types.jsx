import React from 'react'

export default function Step7Types({ data, update, next, prev }){
  const choose = (val) => {
    update({ typeOfHousing: val })
    next()
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold" style={{color:'#503629'}}>Los tipos de vivienda a los que aplicas son:</h3>
      <div className="mt-3 grid sm:grid-cols-3 gap-4">
        <div className="p-3 border rounded">
          <h4 className="font-semibold">Vivienda VIS / VIP</h4>
          <p className="text-sm mt-1">Para personas que devengan hasta 3 salarios mínimos.</p>
          <button onClick={()=>choose('vis')} className="mt-3 btn-primary">Quiero VIS</button>
        </div>
        <div className="p-3 border rounded">
          <h4 className="font-semibold">Vivienda Usada</h4>
          <p className="text-sm mt-1">Casas o aptos disponibles para entrega inmediata.</p>
          <button onClick={()=>choose('usada')} className="mt-3 btn-primary">Ver opciones</button>
        </div>
        <div className="p-3 border rounded">
          <h4 className="font-semibold">Vivienda No VIS</h4>
          <p className="text-sm mt-1">Proyectos nuevos; consulta condiciones y plazos.</p>
          <button onClick={()=>choose('novis')} className="mt-3 btn-primary">Interesa</button>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
      </div>
    </div>
  )
}

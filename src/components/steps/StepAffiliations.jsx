import React from 'react'

export default function StepAffiliations({ data, update, next }){
  const set = (field,val) => update({ [field]: val })

  return (
    <div className="space-y-4">
      <p className="text-base font-medium text-[--db]">Afiliaciones y cajas</p>

      <div>
        <div className="text-sm">¿Estás afiliado(a) a una caja de compensación familiar?</div>
        <div className="flex gap-2 mt-2">
          <button onClick={()=>set('affiliatedToCaja','si')} className="btn-ghost">Sí</button>
          <button onClick={()=>set('affiliatedToCaja','no')} className="btn-ghost">No</button>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={next} className="btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

import React from 'react'

export default function StepHouseGoals({ data, update, next }){
  const choose = (val) => {
    update({ goal: val })
    next()
  }

  return (
    <div className="space-y-4">
      <p className="text-base font-medium text-[--db]">2. ¿Cuál sería tu objetivo principal respecto a vivienda?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <button onClick={()=>choose('comprar_primera')} className="p-3 rounded-md border text-left">Comprar mi primera vivienda</button>
        <button onClick={()=>choose('mejorar')} className="p-3 rounded-md border text-left">Mejorar mi vivienda actual</button>
        <button onClick={()=>choose('cambiar_zona')} className="p-3 rounded-md border text-left">Cambiarme a una zona diferente</button>
        <button onClick={()=>choose('subsidios')} className="p-3 rounded-md border text-left">Acceder a subsidios / beneficios</button>
      </div>
    </div>
  )
}

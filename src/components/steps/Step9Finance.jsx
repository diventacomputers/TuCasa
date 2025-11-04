import React from 'react'

export default function Step9Finance({ data, next, prev }){
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold" style={{color:'#503629'}}>¡Hagamos cuentas!</h3>
      <div className="mt-2">
        <p className="text-sm">100% del valor del inmueble = 30% cuota inicial + 70% crédito hipotecario.</p>
        <p className="text-sm mt-2">Recuerda: tu cuota no debe superar 30%-40% de tus ingresos.</p>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={next} className="btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

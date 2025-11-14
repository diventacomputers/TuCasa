import React from 'react'

export default function Step5Benefits({ next, prev }){
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold" style={{color:'#503629'}}>¡Como ya cuentas con vivienda propia, tenemos estos beneficios para ti!</h3>
      <div className="grid sm:grid-cols-3 gap-4 mt-3">
        <div className="p-3 bg-[--s2] rounded-md">
          <h4 className="font-semibold">Mejora de vivienda</h4>
          <p className="text-sm mt-1">Asesoría y subsidios para mejorar tu vivienda actual.</p>
        </div>
        <div className="p-3 bg-[--s2] rounded-md">
          <h4 className="font-semibold">Legalización de Documentos</h4>
          <p className="text-sm mt-1">Pon al día escrituras, impuestos y otros documentos.</p>
        </div>
        <div className="p-3 bg-[--s2] rounded-md">
          <h4 className="font-semibold">Administración de viviendas</h4>
          <p className="text-sm mt-1">Solicita información en caso de herencias o sucesión.</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={next} className="btn-primary">Finalizar</button>
      </div>
    </div>
  )
}


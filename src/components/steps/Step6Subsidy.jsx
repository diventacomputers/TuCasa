import React from 'react'

export default function Step6Subsidy({ data, update, next, prev, openModal }){
  const set = (field,val) => update({ [field]: val })

  // si se solicita afiliación a caja, abrimos modal (simula abrir nueva pestaña)
  const handleAffiliation = (val) => {
    set('affiliatedToCaja', val)
    if(val === 'si'){
      openModal(
        <div>
          <p>Al tocar Siguiente accederás a la página de Compensar para afiliar a tus beneficiarios. Se abrirá en una nueva pestaña y no perderás tu avance.</p>
        </div>
      )
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-base font-medium" style={{color:'#503629'}}>Para darte la mejor asesoría en la compra de tu nueva vivienda, ayúdanos a completar:</p>

      <div className="grid gap-3 mt-2">
        <div>
          <div className="text-sm">¿Estás afiliado(a) a una caja de compensación familiar?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>handleAffiliation('si')} className="btn-ghost">Sí</button>
            <button onClick={()=>handleAffiliation('no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿Tienes ingresos familiares mensuales inferiores a 4 SMLMV?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('incomesUnder4SM','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('incomesUnder4SM','no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿El hogar está conformado por núcleo familiar?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('householdNucleus','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('householdNucleus','no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿Has sido beneficiario de un subsidio familiar de vivienda antes?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('hadSubsidyBefore','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('hadSubsidyBefore','no')} className="btn-ghost">No</button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="btn-ghost">Volver</button>
        <button onClick={next} className="btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

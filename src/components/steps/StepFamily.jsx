import React from 'react'

export default function StepFamily({ data, update, next }){
  const set = (field, value) => update({ [field]: value })

  return (
    <div className="space-y-4">
      <p className="text-base font-medium text-[--db]">Preguntas sobre hogar</p>
      <div className="grid gap-3">
        <div>
          <div className="text-sm">¿Tienes ingresos familiares mensuales inferiores a 4 SMLMV?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('incomesUnder4SM','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('incomesUnder4SM','no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿El hogar es núcleo familiar?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('householdNucleus','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('householdNucleus','no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿Algún integrante es propietario de vivienda en el país?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('memberOwnsHome','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('memberOwnsHome','no')} className="btn-ghost">No</button>
          </div>
        </div>

        <div>
          <div className="text-sm">¿Has sido beneficiario de un subsidio familiar de vivienda anteriormente?</div>
          <div className="flex gap-2 mt-2">
            <button onClick={()=>set('hadSubsidyBefore','si')} className="btn-ghost">Sí</button>
            <button onClick={()=>set('hadSubsidyBefore','no')} className="btn-ghost">No</button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={next} className="btn-primary">Siguiente</button>
      </div>
    </div>
  )
}

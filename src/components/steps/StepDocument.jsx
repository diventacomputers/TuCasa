import React, { useState } from 'react'

export default function StepDocument({ data, update, next }){
  const [doc, setDoc] = useState(data.document || '')
  const [error, setError] = useState('')

  const handleContinue = () => {
    if (!doc || doc.length < 6) {
      setError('Ingresa tu número de documento válido (mín 6 dígitos).')
      return
    }
    update({ document: doc })
    setError('')
    next()
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-[--db]">Ingresa por favor tu número de documento:</p>
      <input
        value={doc}
        onChange={e=>setDoc(e.target.value.replace(/\s/g,''))}
        className="input"
        placeholder="Cédula / Documento"
      />
      {error && <div className="text-xs text-red-600">{error}</div>}
      <div className="mt-2 flex justify-end">
        <button onClick={handleContinue} className="btn-primary">Continuar</button>
      </div>
    </div>
  )
}

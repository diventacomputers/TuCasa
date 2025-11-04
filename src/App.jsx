import React from 'react'
import Survey from './components/Survey'

export default function App(){
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="max-w-4xl w-full">
        <header className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold" style={{color:'#503629'}}>Compra de Vivienda</h1>
          <p className="mt-2 text-sm text-[--db] opacity-80">Responde estas preguntas — rápido y al punto.</p>
        </header>

        <main className="card">
          <Survey />
        </main>
      </div>
    </div>
  )
}

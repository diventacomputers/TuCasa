import React from 'react'

export default function Modal({open, onClose, title, children}){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold" style={{color:'#503629'}}>{title}</h3>
          <button onClick={onClose} className="text-sm text-gray-500">Cerrar</button>
        </div>
        <div className="mt-3">{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="btn-primary">Aceptar</button>
        </div>
      </div>
    </div>
  )
}

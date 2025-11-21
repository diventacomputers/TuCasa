import React, { useEffect, useState } from "react";
import "./AdminHous.css";

export default function AdminPanel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 🔥 Las funciones deben estar definidas aquí, antes de ser llamadas en el JSX ---
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://macfer.crepesywaffles.com/api/cvivienas111-del-futuros?populate=*"
      );
      const json = await res.json();

      setData(json.data || []);
      setLoading(false);
    } catch (err) {
      console.error("Error cargando datos:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goBack = () => {
    // 🔥 Soluciona: Uncaught ReferenceError: goBack is not defined
    window.location.href = "/";
  };

  // La función shorten se puede eliminar si no se usa, o dejarla si se usa en otro contexto.
  // La dejo comentada por si la necesitas:
  /*
  const shorten = (text, max = 25) =>
    text && text.length > max ? text.slice(0, max) + "..." : text;
  */
  // ---------------------------------------------------------------------------------

  return (
    <div className="admin-container">
      {/* Botón de regreso */}
      <button className="btn-back" onClick={goBack}>
        ⬅ Regresar
      </button>

      <h1 className="admin-title">Panel Administrativo</h1>

      {loading ? (
        <p className="admin-loading">Cargando registros...</p>
      ) : (
        <table className="admin-table">
          <thead>
            {/* 🔥 Sin espacios extraños entre <th> y <tr> para evitar el error de whitespace */}
            <tr>
              <th>ID</th>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Estado Vivienda</th>
              <th>Meta</th>
              <th>Tipo Vivienda</th>
              <th>Respuesta Usuario</th>
              <th>Fecha Registro</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              const r = item.attributes.res_v || {};
              const fullResponse = r.userResponse || "—";
              const homeGoal = r.homeGoal || "—";
              
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.attributes.documento}</td>
                  <td>{item.attributes.nombre}</td>
                  
                  <td>{r.hasHome || "—"}</td>
                  
                  {/* 🔥 Mostrando el texto COMPLETO (sin shorten) */}
                  <td>{homeGoal}</td>
                  
                  <td>{r.typeOfHousing || "—"}</td>
                  
                  {/* 🔥 Mostrando el texto COMPLETO (sin shorten) */}
                  <td>{fullResponse}</td>
                  
                  <td>
                    {new Date(item.attributes.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
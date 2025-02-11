import React from "react";
import "./Noticias.css"; // Importa los estilos

const noticias = [
  { 
    titulo: "🔔 Nueva Funcionalidad en WorkSense",
    descripcion: "Ahora puedes calificar a tu empresa",
    fecha: "10 de febrero de 2025"
  },
  { 
    titulo: "📢 Recordatorio: Revisa tus solicitudes pendientes",
    descripcion: "Las solicitudes fueron actualizadas en su totalidad",
    fecha: "12 de febrero de 2025"
  },
  { 
    titulo: "🚀 Meta del mes",
    descripcion: "Reducir el tiempo de respuesta en soporte a menos de 24 horas. ¡Contamos contigo!",
    fecha: "1 de febrero de 2025"
  },
];

const Noticias = () => {
  return (
    <div className="noticias-container">
      <h2>📰 Noticias y Actualizaciones</h2>
      <ul className="noticias-list">
        {noticias.map((noticia, index) => (
          <li key={index} className="noticia-item">
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
            <span className="fecha">{noticia.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;

import React from 'react';
import fotoPerfil from './image.png';

export default function Header() {
  return (
    <header className="header">
      <div className="profile-img-container">
        <img src={fotoPerfil} alt="Abdiel Orellana Coria" className="profile-img" />
      </div>
      <h1>ABDIEL ORELLANA CORIA</h1>
      <h2>Estudiante de Ingeniería en Sistemas</h2>
    </header>
  );
}
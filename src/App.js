import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

export default function App() {
  return (
    <div className="cv-container">
      {/* Columna Izquierda (Sidebar con foto, contacto, skills y educación) */}
      <aside className="sidebar">
        <Header />
        <Contact />
        <Skills />
        <Education />
      </aside>

      {/* Columna Derecha (Contenido Principal: Perfil, Objetivo y Experiencia) */}
      <main className="main-content">
        <Profile />
        
        <section className="profile" style={{ marginTop: '25px' }}>
          <h3>Objetivo Profesional</h3>
          <p>
            Mi objetivo es incorporarme a una empresa donde pueda seguir creciendo tanto en el ámbito profesional como personal. Busco aportar mis conocimientos, aprender de nuevos retos y desarrollar una carrera basada en el compromiso, la responsabilidad y el trabajo bien realizado.
          </p>
        </section>

        <Experience />
      </main>
    </div>
  );
}
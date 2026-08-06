import React from 'react';

export default function Education() {
  return (
    <>
      <section className="education">
        <h3>Educación</h3>
        <div className="edu-item" style={{ marginBottom: '12px' }}>
          <h4>Ingeniería de Sistemas</h4>
          <p><strong>Universidad Adventista de Bolivia (UAB)</strong></p>
          <p>Estado: Estudiante del último semestre</p>
        </div>
        <div className="edu-item">
          <h4>Educación Secundaria</h4>
          <p><strong>Unidad Educativa Simón I. Patiño</strong></p>
          <p>Bachiller en Humanidades (2021)</p>
        </div>
      </section>

      <section className="military" style={{ marginTop: '20px' }}>
        <h3>Servicio Militar</h3>
        <div className="edu-item">
          <h4>GADA-92</h4>
          <p>Servicio Militar cumplido</p>
        </div>
      </section>
    </>
  );
}
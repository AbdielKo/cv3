import React from 'react';

export default function Skills() {
  return (
    <section className="skills">
      <h3>Habilidades & Idiomas</h3>
      
      <div style={{ marginBottom: '12px' }}>
        <p style={{ margin: '0 0 4px 0' }}><strong>Técnicas y Oficios:</strong></p>
        <p style={{ margin: 0, fontSize: '12px', color: '#bdc3c7' }}>
          Python, Git, GitHub, Mecánica (motos/autos), Electricidad básica, Albañilería.
        </p>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <p style={{ margin: '0 0 4px 0' }}><strong>Habilidades Blandas:</strong></p>
        <p style={{ margin: 0, fontSize: '12px', color: '#bdc3c7' }}>
          Resolución de problemas, aprendizaje rápido, trabajo en equipo, adaptación, responsabilidad y atención al cliente.
        </p>
      </div>

      <div>
        <p style={{ margin: '0 0 4px 0' }}><strong>Idiomas:</strong></p>
        <p style={{ margin: 0, fontSize: '12px', color: '#bdc3c7' }}>
          • Español (Nativo)<br />
          • Quechua (Intermedio)
        </p>
      </div>
    </section>
  );
}
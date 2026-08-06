import React from 'react';

const experiences = [
  {
    role: "Mecánico de motocicletas",
    company: "Área Técnica",
    tasks: [
      "Diagnóstico y reparación de fallas mecánicas.",
      "Mantenimiento preventivo y correctivo.",
      "Cambio de aceite, frenos, transmisión y suspensión.",
      "Atención y asesoramiento a clientes."
    ]
  },
  {
    role: "Ayudante de mecánico de automóviles",
    company: "Sector Automotriz",
    tasks: [
      "Apoyo en el mantenimiento y reparación de vehículos.",
      "Cambio de repuestos y revisiones generales.",
      "Organización de herramientas y área de trabajo."
    ]
  },
  {
    role: "Trabajos de albañilería",
    company: "Sector Construcción",
    tasks: [
      "Apoyo en construcción, remodelación y acabados.",
      "Preparación de materiales y trabajo en equipo."
    ]
  },
  {
    role: "Agricultura",
    company: "Sector Agrícola",
    tasks: [
      "Siembra, mantenimiento y cosecha de cultivos.",
      "Uso de herramientas y maquinaria agrícola básica."
    ]
  },
  {
    role: "Trabajos de electricidad",
    company: "Instalaciones",
    tasks: [
      "Instalaciones y mantenimiento eléctrico básico.",
      "Reparación de conexiones eléctricas."
    ]
  },
  {
    role: "Chofer",
    company: "Transporte",
    tasks: [
      "Conducción responsable de vehículos.",
      "Cumplimiento de rutas y cuidado del vehículo."
    ]
  },
  {
    role: "Delivery",
    company: "Servicios",
    tasks: [
      "Entrega de pedidos con puntualidad.",
      "Atención al cliente y organización de rutas."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience">
      <h3>Experiencia Laboral</h3>
      {experiences.map((item, index) => (
        <div key={index} className="job-item">
          <h4>{item.role} - <span>{item.company}</span></h4>
          <ul>
            {item.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
import React from "react";
import "./portal.css";

// Service Data
const services = [
  { name: "GPRD", description: "GPRD focuses on research, training, and education in the power sector, enhancing knowledge and skill development for sustainable energy solutions.", link: "https://gprd.in/" },
  { name: "GUVNL", description: "GUVNL is the holding company managing power generation, transmission, and distribution across Gujarat, ensuring efficient electricity supply.", link: "https://www.guvnl.com/" },
  { name: "SLDC", description: "SLDC monitors and controls real-time power grid operations in Gujarat, ensuring load balancing and reliable electricity distribution.", link: "https://www.sldcguj.com/" },
  { name: "WRLDC", description: "WRLDC operates under POSOCO, overseeing power transmission, grid stability, and demand management for the western region of India.", link: "https://wrldc.in/" },
  { name: "PGVCL", description: "PGVCL is responsible for power distribution in western Gujarat, ensuring electricity supply to residential, commercial, and industrial consumers.", link: "https://www.pgvcl.com/" },
  { name: "UGVCL", description: "UGVCL handles power distribution in northern Gujarat, focusing on efficient energy management and consumer service.", link: "https://www.ugvcl.com/" },
];

const ServiceCard = ({ name, description, link }) => (
  <div className="service-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={link}>Learn More →</a>
  </div>
);

function portal() {
  return (
    <div className="container">
      <header className="header">
        <h1>Portals</h1>
      </header>
      <section className="services">
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <div className="contact">
        <h2></h2>
        <span>© 2025 PowerPredictAI. All rights reserved | Empowering AI-driven insights for a smarter future.</span>
      </div>
    </div>
  );
}

export default portal;
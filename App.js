import React from "react";
import "./App.css";

// Service Data
const services = [
  { name: "Northern Regional Load Despatch Centre (NRLDC)", description: "NRLDC ensures the integrated operation of the power system in India's Northern Region. Its responsibilities include monitoring system parameters, daily scheduling, facilitating power exchanges, and conducting system studies.", link: "" },
  { name: "Western Regional Load Despatch Centre (WRLDC)", description: "WRLDC oversees the integrated operation of the power system in the Western Region. It focuses on system security, operational planning, facilitating inter-regional power exchanges, and analyzing system disturbances. ", link: "" },
  { name: "Southern Regional Load Despatch Centre (SRLDC)", description: "SRLDC manages the integrated operation of the power system in the Southern Region. Its functions include system monitoring, scheduling, facilitating power exchanges, and ensuring system reliability.", link: "https://www.srldc.in/" },
  { name: "Eastern Regional Load Despatch Centre(ERLDC)", description: "ERLDC is vital entity overseeing power grid operations in their respective region. It ensure real-time electricity balancing, grid security, and seamless power transmission. By coordinating with state utilities, it help to maintain a stable and efficient power supply across the Eastern regions of India.", link: "https://erldc.in/" },
  { name: "Northern Eastern Regional Load Despatch Centre(NERLDC)", description: "NERLDC is vital entity overseeing power grid operations in their respective region. It ensure real-time electricity balancing, grid security, and seamless power transmission. By coordinating with state utilities, it help to maintain a stable and efficient power supply across the North Eastern regions of India.", link: "https://www.nerldc.in/" },
  { name: "Akshay Urja", description: "An initiative by the Ministry of New and Renewable Energy (MNRE), Akshay Urja promotes awareness and adoption of renewable energy sources in India. It highlights advancements in solar, wind, hydro, and bioenergy, encouraging sustainable energy solutions for a greener future.", link: "https://akshayurja.gov.in/" },
];

const ServiceCard = ({ name, description, link }) => (
  <div className="service-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <a href={link}>Learn More →</a>
  </div>
);

function App() {
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

export default App;

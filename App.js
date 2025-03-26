import React from "react";
import "./App.css";
import TransparentImage from "./assests/image/Pic.jpg"; // Ensure this is a transparent PNG image
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">

      {/* Header Section */}
      <header className="header">
        <h1>Power Predictor AI</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><Link to="/National Portals">National Portals</Link></li>
            <li><Link to="/portals" >Portals</Link></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#signup">Signup</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className="transparent-image-container">
          <img src={TransparentImage} alt="AI Load Forecasting" className="transparent-image"/>
        </div>
        <h2>Enhancing Power Distribution Efficiency with AI</h2>
        <p>
          AI-driven models for accurate short-term and long-term electricity
          demand predictions, optimizing energy distribution, and minimizing
          power wastage.
        </p>
        <div className="buttons">
          <button className="btn learn-more">Learn More</button>
          <button className="btn view-dashboard">View Dashboard</button>
        </div>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          {[
            {
              title: "User Authentication & Role-Based Access",
              desc: "Secure login system with personalized dashboards for DISCOMs, Smart Grid Operators, and Policy Makers.",
            },
            {
              title: "Interactive Dashboard",
              desc: "Real-time electricity demand, AI-based predictions, and grid conditions displayed in an intuitive format.",
            },
            {
              title: "Live Data Visualization",
              desc: "Graphs, heatmaps, and charts showing power consumption trends and future forecasts.",
            },
            {
              title: "Multi-Device Compatibility",
              desc: "Access across desktop, tablets, and mobile devices for real-time monitoring.",
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: nexgenninjas@gmail.com</p>
        <p>Phone: +91 5656565656</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Student Power Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
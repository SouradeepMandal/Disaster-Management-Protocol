import "./Hero.css";
import heroImage from "../assets/disaster2.jpeg";

function Hero() {
  return (
    <section className="hero">
      {/* Left Section */}
      <div className="hero-text">

        <div className="status-badge">
          <span className="status-dot"></span>
          AI Monitoring Active
        </div>

        <h1>
          AI Disaster Management
          <br />
          Protocol System
        </h1>

        <p>
          Coordinate rescue teams, monitor incidents, allocate emergency
          resources, and make AI-powered decisions from one intelligent
          platform built for real-time disaster response.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn">
            🚨 Report Incident
          </button>

          <button className="secondary-btn">
            📊 Explore Dashboard
          </button>
        </div>

        {/* Statistics */}
        <div className="hero-stats">

          <div className="stat-card incidents">
            <div className="card-top red"></div>

            <span className="card-status">
              🔴 LIVE
            </span>

            <h2>128</h2>

            <p>Active Incidents</p>
          </div>

          <div className="stat-card teams">
            <div className="card-top blue"></div>

            <span className="card-status">
              🔵 READY
            </span>

            <h2>56</h2>

            <p>Rescue Teams</p>
          </div>

          <div className="stat-card shelters">
            <div className="card-top green"></div>

            <span className="card-status">
              🟢 SAFE
            </span>

            <h2>342</h2>

            <p>Safe Shelters</p>
          </div>

          <div className="stat-card ai">
            <div className="card-top purple"></div>

            <span className="card-status">
              🟣 ONLINE
            </span>

            <h2>24/7</h2>

            <p>AI Monitoring</p>
          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="hero-image">

        <img
          src={heroImage}
          alt="AI Disaster Management"
        />

        <div className="image-badge">
          <span className="badge-dot"></span>
          System Online
        </div>

      </div>

    </section>
  );
}

export default Hero;
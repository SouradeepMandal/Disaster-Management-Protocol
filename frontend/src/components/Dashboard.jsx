import "./Dashboard.css";

import DashboardEffects from "./DashboardEffects";
import IndiaMap from "./IndiaMap";
import PredictionEngine from "./PredictionEngine";
import DisasterTimeline from "./DisasterTimeline";
import ActionCenter from "./ActionCenter";
import SystemStatus from "./SystemStatus";
import MissionIntelligence from "./MissionIntelligence";

import {
  FaAmbulance,
  FaHospital,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";

import { MdEmergency } from "react-icons/md";

function Dashboard() {

  const metrics = [
    {
      value: "24",
      title: "Active Incidents",
      subtitle: "+12 Today",
      icon: <MdEmergency />,
      color: "emergency",
    },
    {
      value: "86",
      title: "Rescue Teams",
      subtitle: "Ready to Deploy",
      icon: <FaAmbulance />,
      color: "ambulance",
    },
    {
      value: "132",
      title: "Safe Shelters",
      subtitle: "Available",
      icon: <FaHospital />,
      color: "hospital",
    },
    {
      value: "98%",
      title: "Response Rate",
      subtitle: "Excellent",
      icon: <FaUsers />,
      color: "response",
    },
  ];

  return (
    <section className="dashboard">

      <DashboardEffects />

      {/* ======================================================
                          HEADER
      ======================================================= */}

      <header className="dashboard-header">

        <div className="header-left">

          <div className="live-status">
            <span className="live-dot"></span>
            LIVE COMMAND CENTER
          </div>

          <h2>
            National Disaster Command Center
          </h2>

          <p>
            AI Powered Emergency Coordination &
            Disaster Monitoring Platform
          </p>

        </div>

        <div className="header-right">

          <div className="info-card">

            <MdEmergency className="info-icon" />

            <div>
              <h4>AI Status</h4>
              <span>Monitoring Active</span>
            </div>

          </div>

          <div className="info-card">

            <FaHeartbeat className="info-icon" />

            <div>
              <h4>Last Updated</h4>
              <span>2 Seconds Ago</span>
            </div>

          </div>

        </div>

      </header>

      {/* ======================================================
                          METRICS
      ======================================================= */}

      <section className="metrics-grid">

        {metrics.map((metric, index) => (

          <article
            className="metric-card"
            key={index}
          >

            <div className={`metric-icon ${metric.color}`}>
              {metric.icon}
            </div>

            <div className="metric-content">
              <h3>{metric.value}</h3>
              <h4>{metric.title}</h4>
              <p>{metric.subtitle}</p>
            </div>

          </article>

        ))}

      </section>

      {/* ======================================================
                    MAIN ENTERPRISE LAYOUT
      ======================================================= */}

      <main className="dashboard-grid">

        {/* ==================================================
                        LEFT COLUMN
        =================================================== */}

        <div className="dashboard-left">

          {/* ===========================
                LIVE DISASTER MAP
          ============================ */}

          <section className="panel map-panel">

            <div className="panel-header">

              <h3>🗺 Live Disaster Map</h3>

              <span className="status live">
                Tracking
              </span>

            </div>

            <IndiaMap />

          </section>

          {/* ===========================
               AI PREDICTION ENGINE
          ============================ */}

          <section className="panel prediction-panel">

            <div className="panel-header">

              <h3>🤖 AI Prediction Engine</h3>

              <span className="status ai">
                AI ACTIVE
              </span>

            </div>

            <PredictionEngine />

          </section>

          {/* ===========================
               MISSION INTELLIGENCE
          ============================ */}

          <section className="panel mission-panel">

            <div className="panel-header">

              <h3>🧠 Mission Intelligence</h3>

              <span className="status ai">
                ACTIVE
              </span>

            </div>

            <MissionIntelligence />

          </section>

        </div>

        {/* ==================================================
                        RIGHT COLUMN
           (Continue in Part 2)
        =================================================== */}

        <div className="dashboard-right">
                    {/* ===========================
                LIVE DISASTER TIMELINE
          ============================ */}

          <section className="panel timeline-panel">

            <div className="panel-header">

              <h3>📡 Live Disaster Timeline</h3>

              <span className="status live">
                LIVE
              </span>

            </div>

            <DisasterTimeline />

          </section>

          {/* ===========================
               WEATHER INTELLIGENCE
          ============================ */}

          <section className="panel weather-panel">

            <div className="panel-header">

              <h3>🌦 Weather Intelligence</h3>

            </div>

            <div className="weather-item">
              <span>Temperature</span>
              <strong>31°C</strong>
            </div>

            <div className="weather-item">
              <span>Humidity</span>
              <strong>84%</strong>
            </div>

            <div className="weather-item">
              <span>Wind Speed</span>
              <strong>18 km/h</strong>
            </div>

            <div className="weather-item">
              <span>Rain Probability</span>
              <strong>92%</strong>
            </div>

          </section>

          {/* ===========================
               AI OPERATIONS CENTER
          ============================ */}

          <section className="panel action-panel">

            <div className="panel-header">

              <h3>🤖 AI Operations Center</h3>

              <span className="status ai">
                READY
              </span>

            </div>

            <ActionCenter />

          </section>

          {/* ===========================
               RESOURCE AVAILABILITY
          ============================ */}

          <section className="panel resources-panel">

            <div className="panel-header">

              <h3>🚑 Resource Availability</h3>

            </div>

            <div className="resource">

              <div className="resource-title">
                <span>Ambulances</span>
                <span>88%</span>
              </div>

              <div className="resource-bar">
                <div className="fill ambulance-fill"></div>
              </div>

            </div>

            <div className="resource">

              <div className="resource-title">
                <span>Fire Trucks</span>
                <span>73%</span>
              </div>

              <div className="resource-bar">
                <div className="fill fire-fill"></div>
              </div>

            </div>

            <div className="resource">

              <div className="resource-title">
                <span>Medical Teams</span>
                <span>94%</span>
              </div>

              <div className="resource-bar">
                <div className="fill medical-fill"></div>
              </div>

            </div>

            <div className="resource">

              <div className="resource-title">
                <span>Helicopters</span>
                <span>62%</span>
              </div>

              <div className="resource-bar">
                <div className="fill helicopter-fill"></div>
              </div>

            </div>

          </section>

          {/* ===========================
                SYSTEM STATUS
          ============================ */}

          <section className="panel system-panel">

            <div className="panel-header">

              <h3>🛰 System Status</h3>

              <span className="status live">
                ONLINE
              </span>

            </div>

            <SystemStatus />

          </section>

        </div>

      </main>

      {/* ======================================================
                     ANALYTICS FOOTER
      ======================================================= */}

      <footer className="analytics-footer">

        <div className="analytics-card">

          <h4>Average Response Time</h4>

          <h2>4.2 Minutes</h2>

          <span className="analytics-trend positive">
            ▲ 12% Faster Today
          </span>

        </div>

        <div className="analytics-card">

          <h4>AI Prediction Accuracy</h4>

          <h2>96.8%</h2>

          <span className="analytics-trend positive">
            ▲ +1.4%
          </span>

        </div>

        <div className="analytics-card">

          <h4>People Assisted Today</h4>

          <h2>12,480</h2>

          <span className="analytics-trend positive">
            ▲ +2,186
          </span>

        </div>

      </footer>

    </section>

  );

}

export default Dashboard;
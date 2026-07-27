import "./Dashboard.css";
import DisasterTimeline from "./DisasterTimeline";
import ActionCenter from "./ActionCenter";
import SystemStatus from "./SystemStatus";
import MiniAnalytics from "./MiniAnalytics";
import DashboardEffects from "./DashboardEffects";
import IndiaMap from "./IndiaMap";
import {
  FaAmbulance,
  FaHospital,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";

import {
  MdEmergency,
} from "react-icons/md";

function Dashboard() {
  return (
    <section className="dashboard">
      <DashboardEffects/>

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">

        <div className="header-left">

          <div className="live-status">

            <span className="live-dot"></span>

            LIVE COMMAND CENTER

          </div>

          <h2>
            National Disaster Command Center
          </h2>

          <p>
            AI Powered Emergency Coordination & Disaster Monitoring Platform
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

      </div>

      {/* ================= METRIC CARDS ================= */}

      <div className="metrics-grid">

        <div className="metric-card">

          <div className="metric-icon emergency">

            <MdEmergency />

          </div>

          <div className="metric-content">

            <h3>24</h3>

            <h4>Active Incidents</h4>

            <p>+12 Today</p>

          </div>

        </div>

        <div className="metric-card">

          <div className="metric-icon ambulance">

            <FaAmbulance />

          </div>

          <div className="metric-content">

            <h3>86</h3>

            <h4>Rescue Teams</h4>

            <p>Ready to Deploy</p>

          </div>

        </div>

        <div className="metric-card">

          <div className="metric-icon hospital">

            <FaHospital />

          </div>

          <div className="metric-content">

            <h3>132</h3>

            <h4>Safe Shelters</h4>

            <p>Available</p>

          </div>

        </div>

        <div className="metric-card">

          <div className="metric-icon response">

            <FaUsers />

          </div>

          <div className="metric-content">

            <h3>98%</h3>

            <h4>Response Rate</h4>

            <p>Excellent</p>

          </div>

        </div>

      </div>
            {/* ================= MAIN GRID ================= */}

      <div className="dashboard-main">

        {/* ========== LEFT SECTION ========== */}

        <div className="dashboard-left">

          {/* Live Map */}

          <div className="panel map-panel">

            <div className="panel-header">

              <h3>🗺 Live Disaster Map</h3>

              <span className="status live">
                Tracking
              </span>

            </div>

            <IndiaMap/>

              
            

          </div>

          {/* AI Prediction */}

          <div className="panel ai-panel">

            <div className="panel-header">

              <h3>🤖 AI Prediction Engine</h3>

              <span className="status ai">
                AI ACTIVE
              </span>

            </div>

            <div className="prediction-chart">

              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "100%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "65%" }}></div>
              <div className="bar" style={{ height: "95%" }}></div>

            </div>

            <div className="prediction-text">

    <h3>High Flood Probability</h3>

    <p>
        AI models predict an elevated flood risk across Eastern India
        based on rainfall intensity, river discharge and satellite
        observations.
    </p>

</div>

<div className="prediction-details">

    <div className="prediction-item">

        <span>AI Confidence</span>

        <strong>96.8%</strong>

    </div>

    <div className="prediction-item critical">

        <span>Risk Level</span>

        <strong>Critical</strong>

    </div>

    <div className="prediction-item">

        <span>Prediction Window</span>

        <strong>3–6 Hours</strong>

    </div>

</div>

<div className="ai-recommendation">

    <h4>AI Recommendation</h4>

    <p>
        Deploy emergency response teams towards Kolkata, Hooghly and
        North 24 Parganas. Keep medical units and evacuation shelters
        on standby.
    </p>

</div>
            <div className="prediction-stats">

  <div className="prediction-stat">
    <h4>18</h4>
    <span>Emergency Teams</span>
  </div>

  <div className="prediction-stat">
    <h4>96%</h4>
    <span>AI Accuracy</span>
  </div>

  <div className="prediction-stat">
    <h4>4.8m</h4>
    <span>Avg Response</span>
  </div>

</div>

          </div>

        </div>

        {/* ========== RIGHT SECTION ========== */}

        <div className="dashboard-right">

          <div className="panel alerts-panel">

    <div className="panel-header">

        <h3>📡 Live Disaster Timeline</h3>

        <span className="status live">
            LIVE
        </span>

    </div>

    <DisasterTimeline />

</div>
                    {/* Weather Intelligence */}

          <div className="panel weather-panel">

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

          </div>
          <div className="panel action-panel">

    <div className="panel-header">

        <h3>🤖 AI Operations Center</h3>

        <span className="status ai">

            READY

        </span>

    </div>

    <ActionCenter/>

</div>
          {/* Resource Availability */}

          <div className="panel resources-panel">

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

          </div>

        </div>

      </div>
      <div className="panel system-panel">

    <div className="panel-header">

        <h3>🛰 System Status</h3>

        <span className="status live">
            ONLINE
        </span>

    </div>

    <SystemStatus/>

</div>
<div className="panel analytics-panel">

    <div className="panel-header">

        <h3>📈 Live Analytics</h3>

        <span className="status live">
            LIVE
        </span>

    </div>

    <MiniAnalytics/>

</div>

      {/* Analytics Footer */}

      <div className="analytics-footer">

        <div className="analytics-card">

          <h4>Average Response Time</h4>

          <h2>4.2 Minutes</h2>

        </div>

        <div className="analytics-card">

          <h4>AI Prediction Accuracy</h4>

          <h2>96.8%</h2>

        </div>

        <div className="analytics-card">

          <h4>People Assisted Today</h4>

          <h2>12,480</h2>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
import "./PredictionEngine.css";
import {
  FaBrain,
  FaCloudRain,
  FaWind,
  FaMountain,
  FaSatellite,
  FaMicrochip,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";

function PredictionEngine() {
  const risks = [
    {
      icon: <FaCloudRain />,
      title: "Flood",
      value: "96%",
      level: "Critical",
      color: "danger",
    },
    {
      icon: <FaWind />,
      title: "Cyclone",
      value: "81%",
      level: "High",
      color: "warning",
    },
    {
      icon: <FaMountain />,
      title: "Earthquake",
      value: "18%",
      level: "Low",
      color: "safe",
    },
  ];

  return (
    <div className="prediction-engine">

      {/* ================= Header ================= */}

      <div className="prediction-top">

        <div className="prediction-title">

          <FaBrain />

          <div>

            <h2>Neural Prediction Engine</h2>

            <span>Deep Learning Analysis Running</span>

          </div>

        </div>

        <div className="prediction-live">

          <span className="pulse"></span>

          LIVE

        </div>

      </div>

      {/* ================= Risk Cards ================= */}

      <div className="prediction-grid">

        {risks.map((risk, index) => (

          <div className={`prediction-card ${risk.color}`} key={index}>

            <div className="prediction-icon">

              {risk.icon}

            </div>

            <div className="prediction-content">

              <span>{risk.title}</span>

              <h3>{risk.value}</h3>

              <small>{risk.level}</small>

            </div>

          </div>

        ))}

      </div>

      {/* ================= Confidence ================= */}

      <div className="confidence-section">

        <div className="confidence-header">

          <span>AI Confidence</span>

          <strong>98.4%</strong>

        </div>

        <div className="confidence-bar">

          <div className="confidence-fill"></div>

        </div>

      </div>

      {/* ================= Neural Status ================= */}

      <div className="processing-box">

        <div className="processing-row">

          <FaSatellite />

          <span>Satellite Feed</span>

          <strong>CONNECTED</strong>

        </div>

        <div className="processing-row">

          <FaMicrochip />

          <span>Neural Processor</span>

          <strong>ACTIVE</strong>

        </div>

        <div className="processing-row">

          <FaBrain />

          <span>Prediction Engine</span>

          <strong>READY</strong>

        </div>

      </div>

      {/* ================= Recommendation ================= */}

      <div className="recommendation-box">

        <div className="recommendation-title">

          <FaCheckCircle />

          AI Recommendation

        </div>

        <p>

          Deploy emergency response teams around
          <strong> Kolkata</strong>,
          <strong> Hooghly</strong> and
          <strong> North 24 Parganas</strong>.
          Keep medical teams and evacuation shelters
          on standby for the next
          <strong> 3–6 hours.</strong>

        </p>

      </div>

      {/* ================= Footer ================= */}

      <div className="prediction-footer">

        <div>

          <span>Processing Speed</span>

          <h4>1.8 sec</h4>

        </div>

        <div>

          <span>Models Running</span>

          <h4>18</h4>

        </div>

        <div>

          <span>Trend</span>

          <h4>

            <FaArrowUp />

            Increasing

          </h4>

        </div>

      </div>

    </div>
  );
}

export default PredictionEngine;
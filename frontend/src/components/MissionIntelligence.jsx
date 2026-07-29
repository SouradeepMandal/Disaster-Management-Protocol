import "./MissionIntelligence.css";

import {
  FaBrain,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";

function Progress({ label, value, color }) {
  return (
    <div className="intel-progress">

      <div className="intel-progress-header">

        <span>{label}</span>

        <strong>{value}%</strong>

      </div>

      <div className="intel-bar">

        <div
          className={`intel-fill ${color}`}
          style={{ width: `${value}%` }}
        ></div>

      </div>

    </div>
  );
}

function Metric({ icon, title, value }) {
  return (
    <div className="intel-metric">

      <div className="metric-icon">
        {icon}
      </div>

      <div>

        <small>{title}</small>

        <h3>{value}</h3>

      </div>

    </div>
  );
}

function MissionIntelligence() {

  const trend = [
    2,3,4,6,7,9,10,8,7,6,8,9,10,9,8,6,5,6,8,10
  ];

  return (

    <div className="mission-intelligence">

      {/* =================== */}

      <div className="intel-top">

        <Progress
          label="Threat Level"
          value={96}
          color="danger"
        />

        <Progress
          label="AI Confidence"
          value={98}
          color="primary"
        />

        <Progress
          label="Response Readiness"
          value={91}
          color="success"
        />

      </div>

      {/* =================== */}

      <div className="intel-middle">

        <Metric
          icon={<FaUsers />}
          title="Population At Risk"
          value="2.48 M"
        />

        <Metric
          icon={<FaShieldAlt />}
          title="Estimated Damage"
          value="₹1.26 B"
        />

      </div>

      {/* =================== */}

      <div className="intel-chart">

        <div className="chart-header">

          <h4>

            Incident Activity

          </h4>

          <span>

            <FaArrowUp />

            LIVE

          </span>

        </div>

        <div className="trend-bars">

          {

            trend.map((bar,index)=>(

              <div
                key={index}
                className="trend-column"
                style={{
                  height:`${bar*10}%`
                }}
              ></div>

            ))

          }

        </div>

      </div>

      {/* =================== */}

      <div className="risk-card">

        <div className="risk-header">

          <FaMapMarkerAlt />

          Highest Risk Zone

        </div>

        <h2>

          Kolkata Metropolitan Region

        </h2>

        <div className="risk-details">

          <span>

            Flood Probability

          </span>

          <strong>

            96.8%

          </strong>

        </div>

        <div className="risk-details">

          <span>

            Estimated Impact

          </span>

          <strong>

            CRITICAL

          </strong>

        </div>

      </div>

      {/* =================== */}

      <div className="decision-box">

        <div className="decision-title">

          <FaBrain />

          AI Decision Engine

        </div>

        <ul>

          <li>

            <FaCheckCircle />

            Deploy 18 rescue units immediately

          </li>

          <li>

            <FaCheckCircle />

            Activate nearby shelters

          </li>

          <li>

            <FaCheckCircle />

            Notify district hospitals

          </li>

          <li>

            <FaCheckCircle />

            Broadcast public emergency alert

          </li>

        </ul>

      </div>

    </div>

  );

}

export default MissionIntelligence;
import "./SystemStatus.css";
import {
  FaServer,
  FaDatabase,
  FaWifi,
  FaSatelliteDish,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

function SystemStatus() {

  const systems = [

    {
      icon: <FaServer />,
      name: "Command Servers",
      status: "ONLINE",
      load: "31%",
      health: "healthy"
    },

    {
      icon: <FaDatabase />,
      name: "National Database",
      status: "SYNCED",
      load: "58%",
      health: "healthy"
    },

    {
      icon: <FaWifi />,
      name: "Communication Grid",
      status: "ACTIVE",
      load: "74%",
      health: "warning"
    },

    {
      icon: <FaSatelliteDish />,
      name: "Satellite Network",
      status: "CONNECTED",
      load: "82%",
      health: "healthy"
    }

  ];

  return (

    <div className="system-monitor">

      <div className="system-header">

        <div>

          <h2>Infrastructure Monitor</h2>

          <span>National Emergency Network</span>

        </div>

        <div className="system-live">

          <span className="live-dot"></span>

          LIVE

        </div>

      </div>

      <div className="system-grid">

        {systems.map((item,index)=>(

          <div
            key={index}
            className={`system-card ${item.health}`}
          >

            <div className="system-icon">

              {item.icon}

            </div>

            <div className="system-info">

              <h3>{item.name}</h3>

              <span>{item.status}</span>

            </div>

            <div className="system-load">

              {item.load}

            </div>

          </div>

        ))}

      </div>

      <div className="health-overview">

        <div className="overview-card">

          <FaCloud />

          <h4>Cloud Health</h4>

          <strong>99.98%</strong>

        </div>

        <div className="overview-card">

          <FaShieldAlt />

          <h4>Security</h4>

          <strong>Protected</strong>

        </div>

        <div className="overview-card">

          <FaCheckCircle />

          <h4>Services</h4>

          <strong>18 / 18</strong>

        </div>

      </div>

      <div className="incident-box">

        <div className="incident-title">

          <FaExclamationTriangle />

          Infrastructure Notice

        </div>

        <p>

          Communication load has increased by
          <strong> 14%</strong>
          across Eastern India due to ongoing
          emergency coordination. Backup servers
          remain on standby.

        </p>

      </div>

    </div>

  );

}

export default SystemStatus;
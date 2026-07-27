import "./SystemStatus.css";
import {
  FaBrain,
  FaSatellite,
  FaCloudSunRain,
  FaDatabase,
  FaBroadcastTower,
  FaShieldAlt,
} from "react-icons/fa";

const systems = [
  {
    icon: <FaBrain />,
    title: "AI Core",
    value: "ONLINE",
    uptime: "99.98%",
    type: "healthy",
  },
  {
    icon: <FaSatellite />,
    title: "Satellite Link",
    value: "CONNECTED",
    uptime: "12 Streams",
    type: "healthy",
  },
  {
    icon: <FaCloudSunRain />,
    title: "Weather API",
    value: "SYNCED",
    uptime: "Live",
    type: "healthy",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Emergency Network",
    value: "ACTIVE",
    uptime: "Nationwide",
    type: "healthy",
  },
  {
    icon: <FaDatabase />,
    title: "Central Database",
    value: "HEALTHY",
    uptime: "2.4 ms",
    type: "healthy",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    value: "SECURED",
    uptime: "Protected",
    type: "healthy",
  },
];

function SystemStatus() {
  return (
    <div className="system-status">
      {systems.map((system, index) => (
        <div className="system-card" key={index}>
          <div className="system-icon">
            {system.icon}
          </div>

          <div className="system-info">
            <h4>{system.title}</h4>
            <p>{system.uptime}</p>
          </div>

          <div className={`system-state ${system.type}`}>
            {system.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SystemStatus;
import "./ActionCenter.css";
import {
  FaAmbulance,
  FaBroadcastTower,
  FaSatelliteDish,
  FaRobot,
  FaFileAlt,
} from "react-icons/fa";

const actions = [
  {
    icon: <FaAmbulance />,
    title: "Deploy Rescue",
    subtitle: "Dispatch nearest rescue teams",
    type: "danger",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Broadcast Alert",
    subtitle: "Send emergency notification",
    type: "warning",
  },
  {
    icon: <FaRobot />,
    title: "Predict Disaster",
    subtitle: "Run AI prediction engine",
    type: "primary",
  },
  {
    icon: <FaSatelliteDish />,
    title: "Satellite Scan",
    subtitle: "Start live satellite analysis",
    type: "secondary",
  },
  {
    icon: <FaFileAlt />,
    title: "Generate Report",
    subtitle: "Create incident summary",
    type: "success",
  },
];

function ActionCenter() {
  return (
    <div className="action-center">

      {actions.map((action, index) => (

        <button
          key={index}
          className={`action-btn ${action.type}`}
        >

          <div className="action-icon">
            {action.icon}
          </div>

          <div className="action-text">

            <h4>{action.title}</h4>

            <p>{action.subtitle}</p>

          </div>

        </button>

      ))}

    </div>
  );
}

export default ActionCenter;
import "./DisasterTimeline.css";
import {
  FaSatelliteDish,
  FaBroadcastTower,
  FaAmbulance,
  FaWater,
  FaRobot,
} from "react-icons/fa";

const events = [
  {
    time: "14:32:08",
    title: "Satellite Scan Completed",
    description: "Heavy cloud formation detected over Eastern India.",
    icon: <FaSatelliteDish />,
    type: "scan",
  },
  {
    time: "14:33:14",
    title: "AI Flood Prediction",
    description: "Flood probability exceeded 96.8%.",
    icon: <FaRobot />,
    type: "critical",
  },
  {
    time: "14:33:58",
    title: "River Overflow Warning",
    description: "Water level crossed danger mark.",
    icon: <FaWater />,
    type: "warning",
  },
  {
    time: "14:35:06",
    title: "Emergency Alert Broadcast",
    description: "Public warning transmitted successfully.",
    icon: <FaBroadcastTower />,
    type: "info",
  },
  {
    time: "14:36:20",
    title: "Rescue Teams Dispatched",
    description: "18 emergency units deployed.",
    icon: <FaAmbulance />,
    type: "success",
  },
];

function DisasterTimeline() {
  return (
    <div className="timeline">

      {events.map((event, index) => (

        <div
          className={`timeline-item ${event.type}`}
          key={index}
        >

          <div className="timeline-left">

            <div className="timeline-dot">
              {event.icon}
            </div>

            {index !== events.length - 1 && (
              <div className="timeline-line"></div>
            )}

          </div>

          <div className="timeline-content">

            <span className="timeline-time">
              {event.time}
            </span>

            <h4>{event.title}</h4>

            <p>{event.description}</p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default DisasterTimeline;
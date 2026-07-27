import "./MiniAnalytics.css";
import {
  FaArrowUp,
  FaArrowDown,
  FaUsers,
  FaAmbulance,
  FaHospital,
  FaBrain,
} from "react-icons/fa";

const analytics = [
  {
    icon: <FaUsers />,
    title: "People Evacuated",
    value: "12,480",
    change: "+18%",
    trend: "up",
  },
  {
    icon: <FaAmbulance />,
    title: "Active Rescue Teams",
    value: "86",
    change: "+4",
    trend: "up",
  },
  {
    icon: <FaHospital />,
    title: "Medical Capacity",
    value: "94%",
    change: "-2%",
    trend: "down",
  },
  {
    icon: <FaBrain />,
    title: "AI Accuracy",
    value: "96.8%",
    change: "+1.4%",
    trend: "up",
  },
];

function MiniAnalytics() {
  return (
    <div className="mini-analytics">

      {analytics.map((item, index) => (

        <div className="mini-card" key={index}>

          <div className="mini-top">

            <div className="mini-icon">
              {item.icon}
            </div>

            <div
              className={`mini-change ${
                item.trend === "up" ? "up" : "down"
              }`}
            >
              {item.trend === "up"
                ? <FaArrowUp />
                : <FaArrowDown />}

              {item.change}
            </div>

          </div>

          <h2>{item.value}</h2>

          <p>{item.title}</p>

          <div className="mini-progress">

            <div
              className="mini-fill"
              style={{
                width: `${70 + index * 7}%`,
              }}
            ></div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default MiniAnalytics;
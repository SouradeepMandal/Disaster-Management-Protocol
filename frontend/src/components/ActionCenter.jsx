import "./ActionCenter.css";

import {
  FaHelicopter,
  FaAmbulance,
  FaBullhorn,
  FaSatelliteDish,
  FaRobot,
  FaHospital,
  FaArrowRight,
  FaCircle,
} from "react-icons/fa";

function ActionCenter() {

  const commands = [

    {
      icon: <FaHelicopter />,
      title: "Deploy Rescue Units",
      status: "READY",
      color: "success",
    },

    {
      icon: <FaAmbulance />,
      title: "Dispatch Medical Teams",
      status: "READY",
      color: "primary",
    },

    {
      icon: <FaHospital />,
      title: "Activate Shelters",
      status: "STANDBY",
      color: "warning",
    },

    {
      icon: <FaBullhorn />,
      title: "Broadcast Emergency Alert",
      status: "READY",
      color: "danger",
    },

    {
      icon: <FaSatelliteDish />,
      title: "Launch Satellite Scan",
      status: "ACTIVE",
      color: "primary",
    },

    {
      icon: <FaRobot />,
      title: "Enable AI Auto Response",
      status: "ONLINE",
      color: "success",
    },

  ];

  return (

    <div className="command-console">

      <div className="console-header">

        <div>

          <h2>Mission Command Console</h2>

          <span>Emergency Operations</span>

        </div>

        <div className="console-live">

          <span className="console-pulse"></span>

          READY

        </div>

      </div>

      <div className="command-list">

        {

          commands.map((item,index)=>(

            <button
              key={index}
              className={`command-card ${item.color}`}
            >

              <div className="command-left">

                <div className="command-icon">

                  {item.icon}

                </div>

                <div>

                  <h3>{item.title}</h3>

                  <span>{item.status}</span>

                </div>

              </div>

              <div className="command-right">

                <FaCircle />

                <FaArrowRight />

              </div>

            </button>

          ))

        }

      </div>

      <div className="console-footer">

        <div className="footer-card">

          <span>Pending Commands</span>

          <h3>04</h3>

        </div>

        <div className="footer-card">

          <span>Executed Today</span>

          <h3>127</h3>

        </div>

        <div className="footer-card">

          <span>AI Success Rate</span>

          <h3>98.7%</h3>

        </div>

      </div>

    </div>

  );

}

export default ActionCenter;
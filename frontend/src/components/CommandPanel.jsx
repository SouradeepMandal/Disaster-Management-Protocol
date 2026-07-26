import "./CommandPanel.css";
import cityData from "./cityData";

function CommandPanel({ selectedCity, setSelectedCity }) {
  return (
    <div className="command-panel">

      <div className="command-header">

        <div>
          <h2>National Command Centre</h2>
          <p>{cityData.length} Active Incidents</p>
        </div>

        <div className="live-status">
          <span className="live-dot"></span>
          AI ONLINE
        </div>

      </div>

      <div className="incident-list">

        {cityData.map((city) => (

          <div

            key={city.id}

            onClick={() => setSelectedCity(city)}

            className={`incident-card ${city.severity} ${
              selectedCity.id === city.id ? "active" : ""
            }`}

          >

            <div className="incident-left">

              <span
                className={`severity-dot ${city.severity}`}
              ></span>

              <div>

                <h3>{city.name}</h3>

                <p>{city.disaster}</p>

              </div>

            </div>

            <div className="incident-right">

              <div>

                <small>AI</small>

                <strong>{city.ai}%</strong>

              </div>

              <div>

                <small>Teams</small>

                <strong>{city.resources}</strong>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CommandPanel;
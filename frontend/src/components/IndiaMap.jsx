import "./IndiaMap.css";

function IndiaMap() {
  return (
    <div className="india-map">

      <div className="map-header">

        <div>
          <h3>🇮🇳 India Live Command Map</h3>
          <p>AI Disaster Monitoring Network</p>
        </div>

        <div className="ai-status">
          <span className="status-dot"></span>
          AI ACTIVE
        </div>

      </div>

      <div className="map-body">

        {/* Radar */}
        <div className="radar-container">
          <div className="radar"></div>
        </div>

        {/* India Map */}
        <div className="india-svg-container">

          <svg
            className="india-svg"
            viewBox="0 0 512 512"
          >

            <path
              className="india-outline"
              d="
                M247 27
                L220 50
                L195 70
                L178 103
                L150 135
                L162 170
                L147 205
                L160 248
                L185 290
                L205 332
                L230 372
                L248 430
                L278 455
                L304 445
                L322 408
                L338 360
                L366 320
                L392 280
                L380 230
                L396 180
                L370 150
                L338 110
                L315 70
                L285 45
                Z
              "
            />

          </svg>

          <div className="city delhi"></div>
          <div className="city mumbai"></div>
          <div className="city kolkata"></div>
          <div className="city bengaluru"></div>
          <div className="city chennai"></div>

        </div>

      </div>

      <div className="map-footer">

        <div className="footer-card">
          <h4>24</h4>
          <span>Active Incidents</span>
        </div>

        <div className="footer-card">
          <h4>96.8%</h4>
          <span>AI Accuracy</span>
        </div>

        <div className="footer-card">
          <h4>86</h4>
          <span>Teams Ready</span>
        </div>

      </div>

    </div>
  );
}

export default IndiaMap;
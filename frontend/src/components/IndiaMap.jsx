import { useState } from "react";

import "./IndiaMap.css";

import cityData from "./cityData";

import CityMarker from "./CityMarker";
import Radar from "./Radar";
import ConnectionLines from "./ConnectionLines";
import CommandPanel from "./CommandPanel";

function IndiaMap() {

  const [selectedCity, setSelectedCity] = useState(cityData[0]);

  return (

    <div className="india-map">

      <div className="map-header">

        <div>

          <h3>National Disaster Command Centre</h3>

          <p>AI Powered Emergency Response Monitoring System</p>

        </div>

      </div>

      <div className="map-content">

        <div className="map-section">

          <div className="map-body">

            <div className="india-svg-container">

              <Radar />

              <svg
                className="india-svg"
                viewBox="0 0 400 500"
              >

                <path
                  className="india-outline"
                  d="
                    M247 27
                    L220 50
                    L200 95
                    L215 145
                    L170 180
                    L160 235
                    L180 300
                    L210 365
                    L235 430
                    L250 470
                    L275 450
                    L285 390
                    L305 330
                    L325 260
                    L300 185
                    L285 120
                    L260 70
                    Z
                  "
                />

              </svg>

              <ConnectionLines />

              {cityData.map((city)=>(

                <CityMarker

                  key={city.id}

                  city={city}

                  selected={selectedCity.id===city.id}

                  onClick={()=>setSelectedCity(city)}

                />

              ))}

            </div>

          </div>

        </div>

        <CommandPanel

          selectedCity={selectedCity}

          setSelectedCity={setSelectedCity}

        />

      </div>

      <div className="map-footer">

        <div className="footer-card">

          <h4>18</h4>

          <span>Emergency Teams</span>

        </div>

        <div className="footer-card">

          <h4>96%</h4>

          <span>AI Accuracy</span>

        </div>

        <div className="footer-card">

          <h4>4.8m</h4>

          <span>Avg Response</span>

        </div>

      </div>

    </div>

  );

}

export default IndiaMap;
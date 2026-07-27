import { useState } from "react";

import "./IndiaMap.css";

import indiaMap from "../assets/india-ai-map.png";

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

    <img
        src={indiaMap}
        alt="India AI Map"
        className="india-image"
    />

    <ConnectionLines />

    {cityData.map((city) => (
        <CityMarker
            key={city.id}
            city={city}
            selected={selectedCity.id === city.id}
            onClick={() => setSelectedCity(city)}
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

      

    </div>

  );

}

export default IndiaMap;
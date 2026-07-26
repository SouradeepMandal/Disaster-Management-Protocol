import "./IndiaMap.css";

function CityMarker({ city, selected, onClick }) {
  return (
    <div
      className={`city-marker ${city.severity} ${
        selected ? "selected" : ""
      }`}
      style={{
        top: city.top,
        left: city.left,
      }}
      onClick={onClick}
    >
      <div className="city-pulse"></div>

      <div className="city-dot"></div>
    </div>
  );
}

export default CityMarker;
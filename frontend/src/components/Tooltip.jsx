function Tooltip({ city }) {
  return (
    <div className="city-tooltip">
      <h4>{city.name}</h4>

      <div className="tooltip-info">
        <p>
          <strong>Incident:</strong> {city.disaster}
        </p>

        <p>
          <strong>AI Confidence:</strong> {city.ai}%
        </p>

        <p>
          <strong>Resources:</strong> {city.resources}
        </p>

        <span className={`severity ${city.severity}`}>
          {city.severity.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default Tooltip;
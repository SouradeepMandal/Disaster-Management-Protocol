import "./ConnectionLines.css";

function ConnectionLines() {

  const connections = [

    {
      x1: "56%",
      y1: "18%",
      x2: "73%",
      y2: "38%",
    },

    {
      x1: "56%",
      y1: "18%",
      x2: "36%",
      y2: "45%",
    },

    {
      x1: "36%",
      y1: "45%",
      x2: "50%",
      y2: "69%",
    },

    {
      x1: "50%",
      y1: "69%",
      x2: "60%",
      y2: "79%",
    },

  ];

  return (

    <svg
      className="connection-svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >

      {connections.map((line, index) => (

        <g key={index}>

          <line
            className="connection-line"
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />

          <line
            className="connection-flow"
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />

        </g>

      ))}

    </svg>

  );

}

export default ConnectionLines;
import "./Radar.css";

function Radar() {
  return (
    <div className="radar-wrapper">

      <div className="radar-ring ring1"></div>
      <div className="radar-ring ring2"></div>
      <div className="radar-ring ring3"></div>
      <div className="radar-ring ring4"></div>

      <div className="radar-cross horizontal"></div>
      <div className="radar-cross vertical"></div>

      <div className="radar-sweep"></div>

      <div className="pulse pulse1"></div>
      <div className="pulse pulse2"></div>

      <div className="radar-center"></div>

    </div>
  );
}

export default Radar;
import "./Features.css";

function Features() {

  const features = [
    {
      icon: "🤖",
      title: "AI Prediction",
      description:
        "Predict potential disasters using AI-powered analysis for faster preparedness.",
    },
    {
      icon: "🚨",
      title: "Incident Reporting",
      description:
        "Quickly report disasters with location, images, and detailed information.",
    },
    {
      icon: "📍",
      title: "Live Tracking",
      description:
        "Track incidents, rescue teams, and emergency resources in real time.",
    },
    {
      icon: "🚑",
      title: "Rescue Management",
      description:
        "Coordinate rescue teams efficiently for faster emergency response.",
    },
    {
      icon: "🏠",
      title: "Shelter Management",
      description:
        "Monitor available shelters, occupancy, and essential facilities.",
    },
    {
      icon: "📊",
      title: "AI Analytics",
      description:
        "Visualize disaster trends, response performance, and operational insights.",
    },
  ];

  return (
    <section className="features">

      <div className="features-header">
        <h2>Powerful AI Features</h2>

        <p>
          Intelligent tools designed to improve disaster response,
          resource management, and public safety.
        </p>
      </div>

      <div className="features-container">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;
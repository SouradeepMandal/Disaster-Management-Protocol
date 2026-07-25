import "./Hero.css";
import heroImage from "../assets/disaster2.jpeg";
function Hero(){
    return(
        <section className="hero">
            <div className="hero-text">
                <div className="status-badge">
                <span className="status-dot"></span>
                AI Monitoring Active    
                </div>
                <h1>AI Disaster Management Platform</h1>
                <p>
                    Manage disasters,rescue teams, and emergency response from one intelligent platform
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Report Incident</button>
                    <button className="secondary-btn">Explore Dashboard</button>
                </div>
            </div>
            <div className="hero-image">
                <img 
                    src={heroImage}
                    alt="Disaster Management"
                    />
            </div>
        </section>
    );
}
export default Hero;
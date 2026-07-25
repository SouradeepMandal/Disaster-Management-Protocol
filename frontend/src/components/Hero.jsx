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
                    <div className="hero-stats">

                        <div className="stat-card">
                            <h2>128</h2>
                            <p>🚨 Active Incidents</p>
                        </div>

                        <div className="stat-card">
                            <h2>56</h2>
                            <p>🚑 Rescue Teams</p>
                        </div>

                        <div className="stat-card">
                            <h2>342</h2>
                            <p>🏥 Safe Shelters</p>
                        </div>

                        <div className="stat-card">
                            <h2>24/7</h2>
                            <p>🤖 AI Monitoring</p>
                        </div>

                    </div>
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
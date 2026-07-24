import "./Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">Disaster Management Protocol</h2>
            <ul className="nav-links">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Resources</li>
                <li>Incidents</li>
                <li>AI Assistant</li>
            </ul>
            <button className="report-btn">
                Report Emergency
            </button>
        </nav>
    )
}
export default Navbar;
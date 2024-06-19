import "../css/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/projects">Projects</Link></li>
                <li className="nav-item"><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;

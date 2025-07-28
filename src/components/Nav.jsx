import { NavLink, Link } from "react-router-dom";
import "./Nav.css"; 

export default function Nav() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="JHill"><div>JH</div></Link>
      <div className="navbar">
        <NavLink to="/" className="nav-link" activeclasscame="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeclasscame="active">About</NavLink>
        <NavLink to="/projects" className="nav-link" activeclasscame="active">Projects</NavLink>
        <NavLink to="/blogs" className="nav-link" activeclasscame="active">Blogs</NavLink>
      </div>
    </nav>
  );
}

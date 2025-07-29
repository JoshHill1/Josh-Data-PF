import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="JHill"><div>JH</div></Link>
      <div className="navbar">
        <NavLink to="/" className="nav-link" activeclasscame="active"><span class="hover-underline-animation"> Home </span></NavLink>
        <NavLink to="/about" className="nav-link" activeclasscame="active"><span class="hover-underline-animation"> About </span></NavLink>
        <NavLink to="/projects" className="nav-link" activeclasscame="active"><span class="hover-underline-animation"> Projects </span></NavLink>
        <NavLink to="/blogs" className="nav-link" activeclasscame="active"><span class="hover-underline-animation"> Blogs </span></NavLink>
      </div>
    </nav>
  );
}

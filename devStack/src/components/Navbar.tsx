import logo from "../assets/logo-text.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <button className="menu-btn">☰</button>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div>
        <ul className="options">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <ul className="Navbuttons">
          <li><button className="button1">Sign In</button></li>
          <li><button className="button2">Sign Up</button></li>
        </ul>
      </div>
    </nav>
  );
}
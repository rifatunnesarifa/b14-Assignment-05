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
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Technologies</a></li>
          <li> <a href="#">Projects</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Contact</a></li>
        </ul>
      </div>

      <div>
        <ul className="Navbuttons">
          <li><button className="button1"> <a href="#">Sign In</a></button></li>
          <li><button className="button2"> <a href="#">Sign Up</a></button></li>
        </ul>
      </div>
    </nav>
  );
}
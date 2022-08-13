import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

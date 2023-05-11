import "./styles/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "var(--color-violet-jc",
  };
  const handleToggle = () => {
    const navlist = document.querySelector(".navlist-list");
    navlist.classList.toggle("open");
  };

  return (
    <nav className="navbar-main">
      <div className="navbar-items">
        <div className="navlogo-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dystdxfua/image/upload/v1669315810/just%20cupcakes/logo_spvrj6.png"
              alt="just-cupcakes-logo"
              className="navbar-logo"
            />
          </Link>
        </div>
        <div className="navlist-container">
          <p className="nav-menu" onClick={handleToggle}>
            elegí tu sabor
          </p>
          <div className="navlist-list">
            <ul className="navlist" onClick={handleToggle}>
              <NavLink
                to="/category/chocolate"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">chocolate</li>
              </NavLink>
              <NavLink
                to="/category/frutal"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">frutal</li>
              </NavLink>
              <NavLink
                to="/category/especial"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <li className="navlist-item">especial</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <div className="navcart-container">
            <CartWidget />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

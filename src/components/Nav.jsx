import { GiHamburgerMenu, GiHexagonalNut } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import "../App.css";

function Nav({ handleScroll, menuOpen, setMenuOpen }) {
  const links = [
    { to: "#HomePage", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#service", label: "Service" },
    { to: "#projects", label: "Projects" },
    { to: "#whyTrust", label: "Why Choose Me" },
    { to: "#contacts", label: "Contacts" },
  ];

  return (
    <nav className="nav-con" aria-label="Main Navigation">
      <div className="icon-box">
        <div className="logo-group">
          <div className="bolt-box" aria-hidden="true">
            <GiHexagonalNut size={20} color="white" />
          </div>
          <div className="text-con">
            <h1>
              CHECHE TECH <br />
              <span>
                Frontend <BsDot size={20} /> UI/UX <BsDot size={20} /> Web Apps
              </span>
            </h1>
          </div>
        </div>
        <button
          className="burger-box"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation Menu"
          style={{
            outline: "none",
            border: "none",
          }}
        >
          {menuOpen ? (
            <IoClose size={20} color="white" />
          ) : (
            <GiHamburgerMenu size={20} color="white" />
          )}
        </button>
        <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.to}
                className="nav-link"
                onClick={(e) => handleScroll(e, link.to)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

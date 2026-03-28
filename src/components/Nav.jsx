import { GiHamburgerMenu, GiHexagonalNut } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "../App.css";

function Nav({ handleScroll, menuOpen, setMenuOpen }) {
  const links = [
    { to: "#HomePage", label: "HomePage" },
    { to: "#about", label: "About" },
    { to: "#contacts", label: "Contacts" },
    { to: "#projects", label: "Projects" },
    { to: "#skills", label: "Skills" },
    { to: "#service", label: "Service" },
  ];

  return (
    <div className="nav-con">
      <div className="icon-box">
        <div className="logo-group">
          <div className="bolt-box">
            <GiHexagonalNut size={20} color="white" />
          </div>
          <div className="text-con">
            <p>
              CHECHE TECH <br /> <span>WEB. MOBILE. SYSTEM</span>
            </p>
          </div>
        </div>
        <div className="burger-box" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoClose size={20} color="white" />
          ) : (
            <GiHamburgerMenu size={20} color="white" />
          )}
        </div>
      </div>
      {menuOpen && (
        <ul className="mobile-menu">
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
      )}
    </div>
  );
}

export default Nav;

import { Button } from "@chakra-ui/react";
import LogoName from "../assets/ticz.svg";
import LogoIcon from "../assets/hugeicons_ticket-01.svg";
import "./css/Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img className="logo" src={LogoIcon} alt="logo-icon" />
        <img className="logo-text" src={LogoName} alt="logo-name" />
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="active">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#">My Tickets</a>
          </li>
          <li className="nav-item">
            <a href="#">About Project</a>
          </li>
        </ul>
      </nav>

      <Button className="header-cta">MY TICKETS →</Button>
    </header>
  );
}

export default Header;

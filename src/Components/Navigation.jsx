import { Link } from "react-router-dom";
import "../Styling/Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navigation__inner">
        <Link to="/" className="navigation__brand">
          Sarah's Space
        </Link>
        <ul className="navigation__links">
          <li>
            <Link to="/" className="navigation__link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/playground" className="navigation__link">
              Playground
            </Link>
          </li>
          <li>
            <Link to="/about" className="navigation__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navigation__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

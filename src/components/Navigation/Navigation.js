import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ isMobile, onClose }) => {
  return (
    <nav className="navigation">
      {isMobile ? (
        <ul className="navigation__list-mobile">
          <li className="navigation__item">
            <Link className="navigation__link" to="/" onClick={onClose}>
              HOME
            </Link>
          </li>

          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="/headphones"
              onClick={onClose}
            >
              HEADPHONES
            </Link>
          </li>

          <li className="navigation__item">
            <Link className="navigation__link" to="/speakers" onClick={onClose}>
              SPEAKERS
            </Link>
          </li>

          <li className="navigation__item">
            <Link
              className="navigation__link"
              to="/earphones"
              onClick={onClose}
            >
              EARPHONES
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navigation__list-desktop">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              HOME
            </Link>
          </li>

          <li className="navigation__item">
            <Link className="navigation__link" to="/headphones">
              HEADPHONES
            </Link>
          </li>

          <li className="navigation__item">
            <Link className="navigation__link" to="/speakers">
              SPEAKERS
            </Link>
          </li>

          <li className="navigation__item">
            <Link className="navigation__link" to="/earphones">
              EARPHONES
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navigation;

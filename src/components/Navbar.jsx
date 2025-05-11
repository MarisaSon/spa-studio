import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="logo">
      <div className="logo-part">
        <Link to="/">
          <img src="/logo.png" alt="Логотип" className="main-logo" />
        </Link>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul className="link">
          <li>
            {" "}
            <Link to="/rituals" onClick={() => setMenuOpen(false)}>
              SPA Ритуалы
            </Link>
          </li>
          <li>
            <Link to="/massages" onClick={() => setMenuOpen(false)}>
              Массажи
            </Link>
          </li>
          <li>
            <Link to="/certificates" onClick={() => setMenuOpen(false)}>
              Сертификаты
            </Link>
          </li>
          <li>
            <Link to="/contacts" onClick={() => setMenuOpen(false)}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <Link to="/cart" className="cart-icon">
          Оформление заказа
        </Link>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <header className="logo">
      <Link to="/">
        <img src="/logo.png" alt="Логотип" className="main-logo" />
      </Link>
      <nav className="menu">
        <ul className="link">
          <li>
            {" "}
            <Link to="/rituals">SPA Ритуалы</Link>
          </li>
          <li>
            <Link to="/massages">Массажи</Link>
          </li>
          <li>
            <Link to="/certificates">Сертификаты</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
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

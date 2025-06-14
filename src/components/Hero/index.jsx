import { Link } from "react-router-dom";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Добро пожаловать в Soma</h1>
          <p className="hero-subtitle">
            Пространство прикосновения, красоты и смысла
          </p>
          <Link to="/cart" className="hero-button">
          Записаться
          </Link>
        </div>
      </div>
    </section>
  );
}

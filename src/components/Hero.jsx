import "./Hero.css";
export default function Hero() {
  return (
    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Добро пожаловать в Soma</h1>
          <p class="hero-subtitle">
            Пространство прикосновения, красоты и смысла
          </p>
          <a href="#booking" class="hero-button">
            Записаться
          </a>
        </div>
      </div>
    </section>
  );
}

import "../components/Footer.css";

export default function Footer() {
  return (
    <footer class="dark-footer">
      <div class="footer-top">
        <div class="footer-social">
          <a href="#" aria-label="Instagram" class="social-icon instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Telegram" class="social-icon telegram">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="#" aria-label="WhatsApp" class="social-icon whatsapp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>

        <div class="footer-contacts">
          <p>+7 (999) 123-45-67</p>
          <p>г. Санкт-Петербург, ул. Фурштатская, д. 23</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>designed by Maria Badkhan © 2025</p>
      </div>
    </footer>
  );
}

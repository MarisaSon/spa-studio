import "../components/Footer.css";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer class="dark-footer">
      <div class="footer-top">
        <div className="footer-social">
          <SocialIcons />
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

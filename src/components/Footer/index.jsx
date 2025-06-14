import "./Footer.css";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <footer className="dark-footer">
      <div className="footer-top">
        <div className="footer-social">
          <SocialIcons />
        </div>

        <div className="footer-contacts">
          <p>+7 (999) 123-45-67</p>
          <p>г. Санкт-Петербург, ул. Фурштатская, д. 23</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>designed by Maria Badkhan © 2025</p>
      </div>
    </footer>
  );
}

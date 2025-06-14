import React from "react";
import "./SocialIcons.css";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp.svg";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/soma_massages"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a
        href="https://t.me/soma_massages"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TelegramIcon} alt="Telegram" />
      </a>
      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

import React from "react";
import "./SocialIcons.css";
import InstagramIcon from "../assets/icons/instagram.svg";
import TelegramIcon from "../assets/icons/telegram.svg";
import WhatsAppIcon from "../assets/icons/whatsapp.svg";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/no_profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a
        href="https://t.me/no_channel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TelegramIcon} alt="Telegram" />
      </a>
      <a
        href="https://wa.me/79998887766"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WhatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

import "../styles/main.css";
export default function Contacts() {
  return (
    <div className="contacts-container">
      <h1 className="page-title">Контакты</h1>

      <div className="contacts-info">
        <p>
          <strong>Адрес:</strong> г. Санкт-Петербург, ул. Фурштатская, д. 23
        </p>
        <p>
          <strong>Телефон:</strong>{" "}
          +7 (999) 123-45-67
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@spa-studio.ru">info@spa-studio.ru</a>
        </p>
        <p>
          <strong>Часы работы:</strong> Пн–Вс, 10:00–21:00
        </p>
      </div>

      <div className="contacts-map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A61b23c087720384bd99ef5cdad52e34e2c120298fcfc209f310ca860bde9d4dd&amp;source=constructor"
          width="100%"
          height="300"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

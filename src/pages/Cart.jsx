import Swal from "sweetalert2";
import "../styles/main.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, title, price } = location.state || {};
  let itemText;

  if (type === "ritual") {
    itemText = `Вы оформляете услугу SPA-ритуал "${title}" стоимостью ${price} рублей`;
  } else if (type === "massage") {
    itemText = `Вы оформляете услугу массаж "${title}" стоимостью ${price} рублей`;
  } else if (type === "certificate") {
    itemText = `Вы оформляете "${title}" номиналом ${price}`;
  } else {
    itemText = "Выберите услугу!";
  }
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedPhone = localStorage.getItem("phone");
    const savedEmail = localStorage.getItem("email");

    if (savedName) setName(savedName);
    if (savedPhone) setPhone(savedPhone);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("phone", phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  const handleAlert = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();

    const onlyLetters = /^[а-яА-Яa-zA-Z\s]+$/;

    if (!onlyLetters.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Ошибка",
        text: "Имя может содержать только буквы.",
      });
      return;
    }
    if (phone.length !== 11) {
      Swal.fire({
        icon: "error",
        title: "Ошибка",
        text: "Введите корректный номер телефона из 11 цифр.",
      });
      return;
    }
    Swal.fire({
      title: "Успех!",
      text: "Спасибо за заказ! Наш менеджер свяжется с вами в течение ближайших 30 минут. ",
      icon: "success",
      confirmButtonText: "ОК",
    });
    handleClear();
  };

  const handleClear = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");

    setName("");
    setPhone("");
    setEmail("");
  };

  const showServiceSelection = !type || !title || !price;
  return (
    <div className="cart-container">
      <form className="cart-form" onSubmit={handleAlert}>
        <div>
          <h1 className="page-title">Оформление заказа</h1>
          {showServiceSelection ? (
            <div className="select-service-block">
              <h2>Пожалуйста, выберите услугу перед оформлением заказа:</h2>
              <div className="service-buttons">
                <button type="button" onClick={() => navigate("/rituals")}>
                  SPA РИТУАЛЫ
                </button>
                <button type="button" onClick={() => navigate("/massages")}>
                  МАССАЖИ
                </button>
                <button type="button" onClick={() => navigate("/certificates")}>
                  СЕРТИФИКАТЫ
                </button>
              </div>
            </div>
          ) : (
            <h2>{itemText}</h2>
          )}
        </div>

        <div className="form-group">
          <label>Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            required
            value={name}
            onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ""))}
          />
        </div>

        <div className="form-group">
          <label>Телефон</label>
          <input
            type="tel"
            name="phone"
            required
            inputMode="numeric"
            pattern="\d*"
            maxLength={11}
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          />
        </div>

        <div className="form-group">
          <label>Электронная почта</label>
          <input
            type="email"
            name="email"
            required
            placeholder="example@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          ОФОРМИТЬ ЗАКАЗ
        </button>
        <button type="button" className="clear-button" onClick={handleClear}>
          ОЧИСТИТЬ ДАННЫЕ
        </button>
      </form>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import "../styles/main.css";
import { getCartItems, minus, plus, removeFromCart } from "../redux/cartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ReduxCart() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-container">
      <div className="cart-form">
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
          <p>Пусто</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <p>
                  {item.title} — {item.price * item.quantity} ₽
                </p>
                <div className="cart-item-controls">
                  <button
                    className="submit-button quantity-button"
                    onClick={() => dispatch(minus(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="submit-button quantity-button"
                    onClick={() => dispatch(plus(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="clear-button remove-button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          className="add-certificate-button"
          onClick={() => navigate("/certificates")}
        >
          + Добавить сертификат
        </button>
        <p style={{ fontWeight: "bold", marginBottom: "16px" }}>
          Итого: {total.toLocaleString("ru-RU")} ₽
        </p>
        <h2>Оформление заказа</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim() || !email.trim()) {
              Swal.fire({
                icon: "error",
                title: "Ошибка",
                text: "Пожалуйста, заполните имя и почту.",
              });
              return;
            }
            Swal.fire({
              icon: "success",
              title: "Данные сохранены",
              text: `Мы отправим чек и напоминание на ${email}`,
            });
          }}
        >
          <div className="form-group">
            <label htmlFor="userName">Имя</label>
            <input
              id="userName"
              type="text"
              value={name}
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ""))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userEmail">Почта</label>
            <input
              id="userEmail"
              type="email"
              value={email}
              placeholder="Почта для отправки сертификата"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            style={{ marginTop: "12px" }}
          >
            Сохранить данные
          </button>
        </form>
        <button
          className="submit-button"
          onClick={() =>
            Swal.fire({
              title: "Переход к оплате",
              text: "Вы будете перенаправлены на страницу оплаты.",
              icon: "info",
              confirmButtonText: "Ок",
            })
          }
        >
          Оплатить
        </button>
      </div>
    </div>
  );
}

import Swal from "sweetalert2";
import "../styles/main.css";

export default function Cart() {
  const handleAlert = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Успех!",
      text: "Ваш заказ оформлен.",
      icon: "success",
      confirmButtonText: "ОК",
    });
  };
  return (
    <div className="cart-container">
      <form className="cart-form">
        <div>
          <h1 className="page-title">Оформление заказа</h1>
          <h2>Вы покупаете электронный сертификат номиналом 5 000 рублей</h2>
        </div>

        <div className="form-group">
          <label>Имя</label>
          <input type="text" placeholder="Имя" />
        </div>

        <div className="form-group">
          <label>Телефон</label>
          <input type="text" placeholder="Телефон" />
        </div>

        <div className="form-group">
          <label>Электронная почта</label>
          <input type="text" placeholder="Почта для отправки сертификата" />
        </div>

        <button onClick={handleAlert} className="submit-button">
          ОФОРМИТЬ ЗАКАЗ
        </button>
      </form>
    </div>
  );
}

import "../components/ServiceCard.css";
function ServiceCard({ cardData }) {
  const { title, description, time, price, img, short, type } = cardData;
  const buttonText = type == "ritual" ? "Записаться на ритуал" : "Записаться на массаж";
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <img src={img} className="image" />
        <p className="subtext">{short}</p>
        <p className="description">{description}</p>
      </div>
      <div className="card-action">
        <p>{time} минут | {price} рублей</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default ServiceCard;

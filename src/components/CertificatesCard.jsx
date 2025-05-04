import { useNavigate } from "react-router-dom";
import "./CertificatesCard.css";
export default function CertificatesCard({ certificate }) {
  const { title, description, image, price, type } = certificate;
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate("/cart", {
      state: {
        title: title,
        price: price,
        type: type,
      },
    });
  };
  return (
    <div className="certificate-container">
      <div className="certificate-image">
        <img src={image} alt={title} />
      </div>

      <div className="certificate-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={handleBuyClick}>Приобрести сертификат</button>
      </div>
    </div>
  );
}

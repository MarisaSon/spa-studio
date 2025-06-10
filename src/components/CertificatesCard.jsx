import { useNavigate } from "react-router-dom";
import "./CertificatesCard.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
export default function CertificatesCard({ certificate }) {
  const dispatch = useDispatch();
  const { title, description, image, price } = certificate;
  const navigate = useNavigate();
  const handleBuyClick = () => {
    const cleanPrice = Number(price.split("руб")[0].trim().replaceAll(" ", ""));
    dispatch(addItemToCart({ ...certificate, price: cleanPrice }));
    navigate("/reduxCart");
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

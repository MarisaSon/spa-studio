import "./CertificatesCard.css";
export default function CertificatesCard({ certificate }) {
  const { title, description, image, price } = certificate;
  return (
    <div className="certificate-container">
      <div className="certificate-image">
        <img src={image} alt={title} />
      </div>

      <div className="certificate-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <button>Приобрести сертификат</button>
      </div>
    </div>
  );
}

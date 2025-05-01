import "../styles/main.css";
import ServiceCard from "../components/ServiceCard";

export default function Massages({ data }) {
  return (
    <div>
      <h1 className="page-title">Массажи</h1>
      <div className="card-container">
        {data.map((massage) => {
          return <ServiceCard cardData={massage} />;
        })}
      </div>
    </div>
  );
}

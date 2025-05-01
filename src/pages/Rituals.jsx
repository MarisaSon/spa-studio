import "../styles/main.css";
import ServiceCard from "../components/ServiceCard";

export default function Rituals({ data }) {
  return (
    <div>
      <h1 className="page-title">SPA Ритуалы</h1>
      <div className="card-container">
        {data.map((ritual) => {
          return <ServiceCard key={ritual.id} cardData={ritual} />;
        })}
      </div>
    </div>
  );
}

import "../styles/main.css";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { useState } from "react";

export default function Rituals({ data }) {
  const [rituals, setRituals] = useState(data);
  const filteredRituals = (time) => {
    const newRituals = data.filter((element) => element.time === time);
    setRituals(newRituals);
  };
  const clearFilter = () => {
    setRituals(data);
  };
  return (
    <div>
      <h1 className="page-title">SPA Ритуалы</h1>
      <Button filteredMassage={filteredRituals} clearFilter={clearFilter} />
      <div className="card-container">
        {rituals.map((ritual) => {
          return <ServiceCard key={ritual.id} cardData={ritual} />;
        })}
      </div>
    </div>
  );
}

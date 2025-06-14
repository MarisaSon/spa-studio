import "../styles/main.css";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { useState } from "react";

export default function Massages({ data }) {
  const [massages, setMassages] = useState(data);
  const filteredMassage = (time) => {
    const newMassages = data.filter((element) => element.time === time);
    setMassages(newMassages);
  };
  const clearFilter = () => {
    setMassages(data);
  };

  return (
    <div>
      <h1 className="page-title">Массажи</h1>
      <Button filteredMassage={filteredMassage} clearFilter={clearFilter} />
      <div className="card-container">
        {massages.map((massage) => {
          return <ServiceCard key={massage.id} cardData={massage} />;
        })}
      </div>
    </div>
  );
}

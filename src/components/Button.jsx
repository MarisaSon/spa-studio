import { useState } from "react";
import "./Button.css";
export default function Button({ filteredMassage, clearFilter }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonClick = (e) => {
    if (e.target.id === selectedButton) {
      setSelectedButton(null);
      clearFilter();
    } else {
      setSelectedButton(e.target.id);
      filteredMassage(Number(e.target.id));
    }
  };

  const classSelector = (id) => {
    return selectedButton === id ? "active-button" : "";
  };
  return (
    <div className="button-container">
      <button className={classSelector("60")} id="60" onClick={buttonClick}>
        60 минут
      </button>
      <button className={classSelector("90")} id="90" onClick={buttonClick}>
        90 минут
      </button>
      <button className={classSelector("120")} id="120" onClick={buttonClick}>
        120 минут
      </button>
    </div>
  );
}

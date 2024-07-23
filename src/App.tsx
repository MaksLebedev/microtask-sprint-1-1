import { useState } from "react";
import "./App.css";
import { NewComponent } from "./NewComponent";

export type FilterType = "all" | "Dollars" | "RUBLS";

function App() {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  let currentMoney = money;

  // если nameButton === 'Dollars'
  if (filter === "Dollars") {
    currentMoney = money.filter((filteredMoney) => {
      return filteredMoney.banknots === "Dollars";
    });
  }
  // если nameButton === 'RUBLS'
  if (filter === "RUBLS") {
    currentMoney = money.filter((filteredMoney) => {
      return filteredMoney.banknots === "RUBLS";
    });
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <>
      <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
      {/* <ul>
        {currentMoney.map((m, index) => {
          return (
            <li key={index}>
              <span>{m.banknots}</span>
              <span>{m.value}</span>
              <span>{m.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: "35px" }}>
        <button onClick={() => onClickFilterHandler("all")}>all</button>
        <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
        <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
      </div> */}
    </>
  );
}

export default App;

import React from "react";
import { FilterType } from "./App";

type ObjMoney = {
  banknots: string;
  value: number;
  number: string;
};

type MoneyPropsType = {
  currentMoney: Array<ObjMoney>;
  onClickFilterHandler: (nameButton: FilterType) => void;
};

export const NewComponent = (props: MoneyPropsType) => {
  return (
    <>
      <ul>
        {props.currentMoney.map((m, index) => {
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
        <button onClick={() => props.onClickFilterHandler("all")}>all</button>
        <button onClick={() => props.onClickFilterHandler("RUBLS")}>
          RUBLS
        </button>
        <button onClick={() => props.onClickFilterHandler("Dollars")}>
          Dollars
        </button>
      </div>
    </>
  );
};

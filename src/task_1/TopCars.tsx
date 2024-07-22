import React from "react";

type ObjCar = {
  manufacturer: string;
  model: string;
};

type TopCarsType = {
  topCars: Array<ObjCar>;
};

export const TopCars = (props: TopCarsType) => {
  return (
    <>
      {props.topCars.map((c, index) => {
        return (
          <table>
            <tr key={index}>
              <th>
                {c.manufacturer} Модель: {c.model}
              </th>
            </tr>
          </table>
        );
      })}
    </>
  );
};

export default TopCars;

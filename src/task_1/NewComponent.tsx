import React from "react";

type ObjStudent = {
  id: number;
  name: string;
  age: number;
};

type NewComponentType = {
  students: Array<ObjStudent>;
};

export const NewComponent = (props: NewComponentType) => {
  return (
    <>
      {props.students.map((s) => {
        
        return (
          <ul key={s.id}>
            <li>
              <span>Name: {s.name}</span>
              <span> Age: {s.age}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
};

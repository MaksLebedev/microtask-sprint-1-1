import "./App.css";
import React from "react";
import { MouseEvent } from "react";
import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hello, i'm Vasya!");
  // };
  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hello, i'm Ivan!");
  // };

  // const onclickHandler = (name: string) => {
  //   console.log(name);
  // };

  // const foo1 = () => {
  //   console.log(100200);
  // };

  // const foo2 = (number: number) => {
  //   console.log(number);
  // };

  const Button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };

  const Button3Foo = () => {
    console.log(`I'm stupid button`);
  };

  return (
    <>
      {/* <button
        onClick={(event) => {
          console.log("Hello!");
        }}
      >
        MyYouTubeChanel-1
      </button> */}
      {/* <button onClick={() => onclickHandler("Vasya")}>MyYouTubeChanel-1</button>
      <button onClick={() => onclickHandler("Ivan")}>MyYouTubeChanel-2</button> */}
      {/* <button onClick={() => onclickHandler("some info")}>MyYouTubeChanel-3</button> */}
      {/* <button onClick={foo1}>1</button> */}
      {/* <button
        onClick={() => {
          foo2(100200);
        }}
      >
        2
      </button> */}
      <Button
        name={"MyYouTubeChanel-1"}
        callback={() => Button1Foo(`I'm Vasya`, 21, "live in Minsk")}
      />
      <Button
        name={"MyYouTubeChanel-2"}
        callback={() => Button2Foo(`I'm Ivan`)}
      />
      <Button name={"Stupid Button"} callback={Button3Foo} />
    </>
  );
}

export default App;

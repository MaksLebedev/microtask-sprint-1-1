import React from "react";

type ButtonPropsTyped = {
  name: string;
  callback: () => void;
};

export const Button = (props: ButtonPropsTyped) => {
  const onClickHandler = () => {
    props.callback();
  };
  return <button onClick={onClickHandler}>{props.name}</button>;
};

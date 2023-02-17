import React from "react";
import "./Button.css";

const Button = ({isActive, click, isLoading}) => {

  return (
    <button
      className={`Button ${isActive ? "active" : isLoading ? "Button--loading" : ""}`}
      onClick={click}
      disabled={!isActive || isLoading}
    >
      {isActive ? "Создать" : isLoading? <div className="preloader" /> : "Неактивная"}
    </button>
  );
};

export default Button;
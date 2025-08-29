import React from "react";
import "./Buton.css";

const Buttons = () => {
  const suggestions = [
    "Blue diamon almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs",
    "Blue diamon almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs"
  ];

  return (
    <div className="suggestions-wrapper">
      <h2>People are also looking for</h2>
      <div className="buttons-container">
        {suggestions.map((item, index) => (
          <button key={index} className="suggestion-btn">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;


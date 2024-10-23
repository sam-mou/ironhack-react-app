import React from "react";

const ListItem = ({ item, onDelete }) => {
  const allValuesTruthy = Object.values(item).every((value) => Boolean(value));

  return (
    <div className="recipe-item">
      <img src={item.image} alt={item.name} className="recipe-img" />
      <div className="recipe-text">
        <h3>{item.name}</h3>
        <p>Calories: {item.calories}</p>
        <p>Status: {allValuesTruthy ? "✅" : "❌"}</p>
        <button onClick={() => onDelete(item.id)} className="recipe-button">
          Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default ListItem;

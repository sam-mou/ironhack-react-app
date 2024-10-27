import React from "react";
import ListItem from "./ListItem";

function List({ recipes, onDelete }) {
  return (
    <div>
      <ul className="recipes">
        {recipes.map((recipeObj) => (
          <ListItem
            key={recipeObj.id}
            item={recipeObj}
            onDelete={() => onDelete(recipeObj.id)}/>
        ))}
      </ul>
    </div>
  );
}

export default List;

import React, { useState } from "react";
import recipes from "../data/recipes.json";
import ListItem from "./ListItem";

function List() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);

  const deleteRecipe = (recipeId) => {
    const newRecipes = recipesToDisplay.filter((recipeObj) => recipeObj.id !== recipeId);
    setRecipesToDisplay(newRecipes);
  };

  return (
    <div>
      <ul className="recipes">
        {recipesToDisplay.map((recipeObj) => (
          <ListItem
            key={recipeObj.id}
            item={recipeObj}
            onDelete={deleteRecipe}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;

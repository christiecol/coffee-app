import React from "react";

import { RecipeComponent } from "./RecipeComponent";

export const RecipeButtons = ({ recipes, handleFavouritesClick }) => {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <RecipeComponent
            recipe={recipe}
            key={recipe._id}
            handleFavouritesClick={handleFavouritesClick}
          />
        );
      })}
    </>
  );
};

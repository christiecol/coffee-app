import React from "react";
import { useSelector } from "react-redux";
import { getRecipe } from "../../../redux/reducers/RecipesReducer";
import { RecipeComponent } from "./RecipeComponent";

export const SingleRecipeButton = () => {
  const state = useSelector(getRecipe);

  return (
    <>
      {state.recipe.map((recipe) => {
        console.log(recipe);
        return <RecipeComponent recipe={recipe} />;
      })}
    </>
  );
};

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  requestRecipe,
  responseRecipe,
  responseRecipeError,
} from "../../redux/actions/actions";

export const FetchRecipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRecipe());
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        console.log("result", res);
        if (res.error) {
          throw res.error;
        }
        dispatch(responseRecipe(res.recipes));
        console.log(res.recipes);
        return res.recipes;
      })
      .catch((error) => {
        dispatch(responseRecipeError(error));
      });
  }, []);
  console.log(responseRecipe);

  return null;
};

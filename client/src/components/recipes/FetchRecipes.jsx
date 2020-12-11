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
        if (res.error) {
          throw res.error;
        }
        dispatch(responseRecipe(res.recipes));
        return res.recipes;
      })
      .catch((error) => {
        dispatch(responseRecipeError(error));
      });
  }, []);

  return null;
};

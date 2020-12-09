//origins
export const requestAllOrigins = () => {
  return {
    type: "REQUEST_ALL_ORIGINS",
  };
};

export const responseAllOrigins = (origins) => {
  return {
    type: "RESPONSE_ALL_ORIGINS",
    origins,
  };
};

export const responseAllOriginsError = (error) => {
  return {
    type: "RESPONSE_ALL_ORIGINS_ERROR",
    error,
  };
};

//recipes
export const requestRecipe = () => {
  return {
    type: "REQUEST_RECIPE",
  };
};

export const responseRecipe = (recipe) => {
  return {
    type: "RESPONSE_RECIPE",
    recipe,
  };
};

export const responseRecipeError = (error) => {
  return {
    type: "RESPONSE_RECIPE_ERROR",
    error,
  };
};

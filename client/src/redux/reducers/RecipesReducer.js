const initialState = {
  pending: false,
  recipe: [],
  error: null,
};

export default function AllRecipesReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_RECIPE": {
      return {
        ...state,
        pending: true,
      };
    }

    case "RESPONSE_RECIPE": {
      console.log(action);
      return {
        ...state,

        recipe: action.recipe,
        pending: false,
      };
    }

    case "RESPONSE_RECIPE_ERROR": {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
}

export const getRecipe = (state) => state.recipe;
export const getRecipePending = (state) => state.pending;
export const getRecipeError = (state) => state.error;

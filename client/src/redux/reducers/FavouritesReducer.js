const initialState = {
  recipe: [],
};

export default function FavouritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      return {
        ...state,
        recipe: action.recipe,
      };
    }

    case "REMOVE_FROM_FAVOURITES": {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

export const addToFavourites = (state) => state.recipe;
export const removeFromFavourites = (state) => state;

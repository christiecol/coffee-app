import { combineReducers } from "redux";

import AllOriginsReducer from "./AllOriginsReducer";
import FavouritesReducer from "./FavouritesReducer";
import AllRecipesReducer from "./RecipesReducer";

export const allReducers = combineReducers({
  origins: AllOriginsReducer,
  recipe: AllRecipesReducer,
  favourites: FavouritesReducer,
});

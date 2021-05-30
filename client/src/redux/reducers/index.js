import { combineReducers } from "redux";

import AllOriginsReducer from "./AllOriginsReducer";
// import FavouritesReducer from "./FavouritesReducer";
import AllRecipesReducer from "./RecipesReducer";
import UsersReducer from "./UsersReducer";

export const allReducers = combineReducers({
  origins: AllOriginsReducer,
  recipe: AllRecipesReducer,
  // favourites: FavouritesReducer,
  users: UsersReducer,
});

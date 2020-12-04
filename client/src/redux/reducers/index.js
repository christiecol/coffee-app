import React from "react";
import { combineReducers } from "redux";

import AllOriginsReducer from "./AllOriginsReducer";

export const allReducers = combineReducers({
  origins: AllOriginsReducer,
});

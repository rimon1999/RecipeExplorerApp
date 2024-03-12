import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  recipes: recipeReducer, // Include your recipeReducer here
  // Add other reducers if you have them
});

export default rootReducer;

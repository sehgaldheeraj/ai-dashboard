import { combineReducers } from "@reduxjs/toolkit";
import aiReducer from "./aiReducer";

const rootReducer = combineReducers({
  ai: aiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { configureStore, Middleware } from "@reduxjs/toolkit";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk"; // Import thunk middleware
import rootReducer from "./index"; // Assuming you have a root reducer
import { AnyAction, Dispatch } from "redux";

// Define custom middleware function
const thunkMiddleware: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

// Create Redux store with custom thunk middleware applied
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares: Middleware[] = [thunkMiddleware];
    return middlewares;
  },
});

export default store;

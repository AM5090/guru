import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./services/api/products";
import { loginApi } from "./services/api/login";

export const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

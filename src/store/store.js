import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice"

const rootReducer = combineReducers({
  productReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
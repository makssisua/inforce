import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice"
import commentsReducer from "./reducers/commentsSlice"

const rootReducer = combineReducers({
  productReducer,
  commentsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
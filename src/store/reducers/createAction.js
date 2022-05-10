import axios from "axios"
import { productSlice } from "./productSlice"
import products from './../../fakeData/products.JSON'

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching)
    const response = await axios.get(products)
    dispatch(productSlice.actions.productsFetchingSuccess(response.data))
  } catch (e) {
    let result = (e).message
    dispatch(productSlice.actions.productsFetchingError(result))
  }
}
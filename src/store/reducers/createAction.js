import axios from "axios"
import { productSlice } from "./productSlice"
import { commentsSlice } from "./commentsSlice"
import products from './../../fakeData/products.JSON'
import comments from './../../fakeData/comments.JSON'

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

export const fetchComments = () => async (dispatch) => {
  try {
    dispatch(commentsSlice.actions.commentsFetching)
    const response = await axios.get(comments)
    dispatch(commentsSlice.actions.commentsFetchingSuccess(response.data))
  } catch (e) {
    let result = (e).message
    dispatch(commentsSlice.actions.commentsFetchingError(result))
  }
}
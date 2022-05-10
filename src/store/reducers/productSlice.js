import { createSlice } from "@reduxjs/toolkit";
const localData = localStorage.getItem('products')

const initialState = {
  products: JSON.parse(localData),
  isLoading: false,
  error: ''
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload
    },
    productsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload
    },
    deleteContact(state, action) {
      state.products = state.products.filter(el => el.id !== Number(action.payload) )
    }
  }
})

export default productSlice.reducer;
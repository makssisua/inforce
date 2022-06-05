import { createSlice } from "@reduxjs/toolkit";
const localData = localStorage.getItem('comments')

const initialState = {
  comments: JSON.parse(localData),
  isLoading: false,
  error: ''
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsFetching(state) {
      state.isLoading = true;
    },
    commentsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.comments = action.payload
    },
    commentsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload
    }
  }
})

export default commentsSlice.reducer;
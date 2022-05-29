import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "This is title 1",
    content: "This is test content"
  },
  {
    id: 2,
    title: "This is title 2",
    content: "This is test content alsncl"
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

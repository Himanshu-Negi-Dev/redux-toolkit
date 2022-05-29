import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postsSlice";
import userReducer from "../feature/users/userSlice";
const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  }
});

export default store;

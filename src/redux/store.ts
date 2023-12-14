import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

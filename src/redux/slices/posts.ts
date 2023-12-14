import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IEditPost, IRejectValue, Post, PostData } from "../../types";

import {
  deletePostById,
  getPosts,
  postPosts,
  putPostById,
} from "../../api/postApi";

type PostsState = {
  posts: Post[];
  status: string | null;
  error?: string | null;
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const { data } = await getPosts();
    return data as Post[];
  }
);

export const fetchRemovePost = createAsyncThunk<
  PostData,
  string,
  { rejectValue: IRejectValue }
>("posts/fetchRemovePost", async (id, { rejectWithValue }) => {
  try {
    return await deletePostById(id);
  } catch (err: any) {    
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const addPost = createAsyncThunk<
  PostData,
  Post,
  { rejectValue: IRejectValue }
>("posts/addPost", async (data, { rejectWithValue }) => {
  try {
    return await postPosts(data);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

export const sendUpdatedPost = createAsyncThunk<
  PostData,
  IEditPost,
  { rejectValue: IRejectValue }
>("posts/updatePost", async (params, { rejectWithValue }) => {
  try {
    return await putPostById(params);
  } catch (err: any) {
    return rejectWithValue({ data: err.response.data.message });
  }
});

const initialState: PostsState = {
  posts: [],
  status: "loading",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get posts
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = [];
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = [];
      state.status = "error";
    });
    //remove post
    builder.addCase(fetchRemovePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (obj: Post) => obj.id !== action.payload.data.id
      );
    });
    //add post
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts = [action.payload.data, ...state.posts];
      console.log(state.posts);
    });
    //update post
    builder.addCase(sendUpdatedPost.fulfilled, (state, action) => {
      state.posts = state.posts.map((item: Post) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        }
        return item;
      });
    });
  },
});

export const postsReducer = postsSlice.reducer;

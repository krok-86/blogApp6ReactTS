import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deletePostById,
  getPosts,
  postPosts,
  putPostById,
} from "../../api/postApi";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await getPosts();
  return data;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id, { rejectWithValue }) => {
    try {
      return await deletePostById(id);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (data, { rejectWithValue }) => {
    try {
      return await postPosts(data);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const sendUpdatedPost = createAsyncThunk(
  "posts/updatePost",
  async (params, { rejectWithValue }) => {
    try {
      return await putPostById(params);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

const initialState = {
  posts: [],
  status: "loading",  
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //get posts
    [fetchPosts.pending]: (state) => {
      state.posts = [];
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts = [];
      state.status = "error";
    },
    //remove post
    [fetchRemovePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (obj) => obj.id !== action.payload.data.id
      );
    },
    //add post
    [addPost.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload.data];
      console.log(state.posts);
    },
    //update post
    [sendUpdatedPost.fulfilled]: (state, action) => {
      state.posts = state.posts.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        }
        return item;
      });
      console.log(action.payload.data);
    },
  },
});

export const postsReducer = postsSlice.reducer;

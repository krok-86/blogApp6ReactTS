import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deletePostById,
  getPosts,
  postPosts,
  putPostById,
} from "../../api/postApi";

type Posts = {
  id: number,
  postText: string,
  userId: number,
  err: string,//fix
}[];

type PostsState = {
  posts: Posts[];
  status: string;
  error?: string | null;  
};

export const fetchPosts = createAsyncThunk<Posts[]>("posts/fetchPosts", async () => {
  const { data } = await getPosts();
  return data as Posts;//fix
});

export const fetchRemovePost = createAsyncThunk<Posts, number, {rejectValue: string} >(
  "posts/fetchRemovePost",
  async (id, { rejectWithValue }) => {
    try {
      return await deletePostById(id);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const addPost = createAsyncThunk<Posts[]>(
  "posts/addPost",
  async (data, { rejectWithValue }) => {
    try {
      return await postPosts(data);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const sendUpdatedPost = createAsyncThunk<Posts[]>(
  "posts/updatePost",
  async (params, { rejectWithValue }) => {
    try {
      return await putPostById(params);
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

const initialState: PostsState = {
  posts: [],
  status: "loading",  
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //get posts
    [fetchPosts.pending]: (state: { posts: PostsState; status: string; }) => {
      state.posts = [];
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action: PayloadAction<Posts>) => {
      state.posts = action.payload;
      state.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts = [];
      state.status = "error";
    },
    //remove post
    [fetchRemovePost.fulfilled]: (state, action: PayloadAction<Posts>) => {
      state.posts = state.posts.filter(
        (obj) => obj.id !== action.payload.data.id
      );
    },
    //add post
    [addPost.fulfilled]: (state, action: PayloadAction<Posts>) => {
      state.posts = [...state.posts, action.payload.data];
      console.log(state.posts);
    },
    //update post
    [sendUpdatedPost.fulfilled]: (state, action: PayloadAction<Posts>) => {
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

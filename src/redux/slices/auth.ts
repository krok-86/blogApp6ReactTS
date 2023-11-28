import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUserAuth, getUserAuthMe, postUserReg } from "../../api/postApi";

export const fetchReg = createAsyncThunk(
  "registration/fetchReg",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await postUserReg(params);
      return data;
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const fetchAuth = createAsyncThunk(
  "authorization/fetchAuth",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await postUserAuth(params);
      return data;
    } catch (err) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const fetchAuthMe = createAsyncThunk(
  "authorization/fetchAuthMe",
  async () => {
    const { data } = await getUserAuthMe();
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchReg.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchReg.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload.userData;
    },
    [fetchReg.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload.userData;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;

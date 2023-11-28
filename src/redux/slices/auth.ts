import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUserAuth, getUserAuthMe, postUserReg } from "../../api/postApi";
import { IRegistrationForm, IRegistrationFormData, IRejectValue } from "../../types";
import { RootState } from "../store";

export const fetchReg = createAsyncThunk<IRegistrationFormData, IRegistrationForm, {rejectValue: IRejectValue}>(
  "registration/fetchReg",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await postUserReg(params);
      return data;
    } catch (err: any) {
      return rejectWithValue({ data: err.response.data.message });
    }
  }
);

export const fetchAuth = createAsyncThunk<IRegistrationFormData, IRegistrationForm, {rejectValue: IRejectValue}>(
  "authorization/fetchAuth",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await postUserAuth(params);
      return data;
    } catch (err: any) {
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

type InitialAuthState = {
  data: IRegistrationForm | null,
  status: "loading" | "loaded" | "error",
}

const initialState: InitialAuthState = {
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
  extraReducers: (builder) => {
    builder.addCase(fetchReg.pending, (state) => {
      state.status = "loading";
      state.data = null;
    })
    builder.addCase(fetchReg.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload.userData;
    })
    builder.addCase(fetchReg.rejected, (state) => {
      state.status = "error";
      state.data = null;
    })
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = "loading";
      state.data = null;
    })
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload.userData;
    })
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = "error";
      state.data = null;
    })
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = "loading";
      state.data = null;
    })
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    })
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = "error";
      state.data = null;
    })
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { postUserAuth, getUserAuthMe, postUserReg } from "../../api/postApi";

// export const fetchReg = createAsyncThunk(
//   "registration/fetchReg",
//   async (params, { rejectWithValue }) => {
//     try {
//       const { data } = await postUserReg(params);
//       return data;
//     } catch (err) {
//       return rejectWithValue({ data: err.response.data.message });
//     }
//   }
// );

// export const fetchAuth = createAsyncThunk(
//   "authorization/fetchAuth",
//   async (params, { rejectWithValue }) => {
//     try {
//       const { data } = await postUserAuth(params);
//       return data;
//     } catch (err) {
//       return rejectWithValue({ data: err.response.data.message });
//     }
//   }
// );

// export const fetchAuthMe = createAsyncThunk(
//   "authorization/fetchAuthMe",
//   async () => {
//     const { data } = await getUserAuthMe();
//     return data;
//   }
// );

// interface AuthState {
//   data: any;
//   status: "loading" | "loaded" | "error";
// }

// const initialState: AuthState = {
//   data: null,
//   status: "loading",
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.data = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchReg.pending, (state) => {
//         state.status = "loading";
//         state.data = null;
//       })
//       .addCase(fetchReg.fulfilled, (state, action) => {
//         state.status = "loaded";
//         state.data = action.payload.userData;
//       })
//       .addCase(fetchReg.rejected, (state) => {
//         state.status = "error";
//         state.data = null;
//       })
//       .addCase(fetchAuth.pending, (state) => {
//         state.status = "loading";
//         state.data = null;
//       })
//       .addCase(fetchAuth.fulfilled, (state, action) => {
//         state.status = "loaded";
//         state.data = action.payload.userData;
//       })
//       .addCase(fetchAuth.rejected, (state) => {
//         state.status = "error";
//         state.data = null;
//       })
//       .addCase(fetchAuthMe.pending, (state) => {
//         state.status = "loading";
//         state.data = null;
//       })
//       .addCase(fetchAuthMe.fulfilled, (state, action) => {
//         state.status = "loaded";
//         state.data = action.payload;
//       })
//       .addCase(fetchAuthMe.rejected, (state) => {
//         state.status = "error";
//         state.data = null;
//       });
//   },
// });

// export const selectIsAuth = (state: { auth: AuthState }) =>
//   Boolean(state.auth.data);

// export const authReducer = authSlice.reducer;

// export const { logout } = authSlice.actions;
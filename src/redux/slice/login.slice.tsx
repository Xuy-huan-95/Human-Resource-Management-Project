import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoginResponse } from "../../interface/login";
import { SignIn } from "../../api/api";
import { toast } from "react-toastify";

export const loginApi = createAsyncThunk(
  "login",
  async (data: { username: string; password: string }, thunkApi) => {
    try {
      const response = await SignIn(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialSate: {
  user: LoginResponse;
  isloading: boolean;
  isSuccess: boolean;
  isError: boolean;
  islogin: boolean,
  message: string;
} = {
  isloading: false,
  isSuccess: false,
  isError: false,
  islogin: false,
  message: "",
  user: {
    access_token: "",
    token_type: "",
    refresh_token: "",
    expires_in: 0,
    scope: "",
    organization: "",

  },
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialSate,
  reducers: {
    refreshUser: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state, action) => {
      if (action.payload) {
        state.isloading = true;
      }
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.isloading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;

      }
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.isloading = false;
      state.isError = true;

      state.isSuccess = false;
      state.message = action.error.message || "Login Fail";
      toast.error("Mật khẩu hoặc password không chính xác , vui lòng thử lại")
    });
  },
});
export const { refreshUser, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

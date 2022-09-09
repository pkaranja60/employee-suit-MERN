import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "/api/users/";

// Get user from local storage
const userLogin = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  userLogin: userLogin ? userLogin : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Register User
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      //http call
      const response = await axios.post(API_URL + "register", user);

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//Login User
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      //http call

      const response = await axios.post(API_URL + "login", userData);

      // Save data to local storage
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// Logout User
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("userInfo");
});

//Slices
export const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.registered = action?.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.registered = null;
    });

    //login
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.login = action?.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.login = null;
    });

    //logout
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.message = null;
      state.userLogin = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { reset } = authSlices.actions;
export default authSlices.reducer;

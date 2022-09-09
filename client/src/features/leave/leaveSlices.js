import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "/api/leave/";

const initialState = {
  leaveList: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Fetch all employees
export const fetchLeaveRequests = createAsyncThunk(
  "leave/fetch",
  async (leaveRequests, { rejectWithValue, getState, dispatch }) => {
    try {
      //get user token

      const user = getState()?.auth;
      const { userLogin } = user;

      const config = {
        headers: {
          Authorization: `Bearer ${userLogin?.token}`,
        },
      };

      //http call
      const response = await axios.get(API_URL + "fetchRequests", config);
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

//slices
export const leaveSlices = createSlice({
  name: "leave",
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
    //fetch all employees
    builder.addCase(fetchLeaveRequests.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLeaveRequests.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.leaveList = action?.payload;
    });
    builder.addCase(fetchLeaveRequests.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.leaveList = null;
    });
  },
});

export const { reset } = leaveSlices.actions;
export default leaveSlices.reducer;

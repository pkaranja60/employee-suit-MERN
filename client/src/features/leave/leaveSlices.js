import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "/api/leave/";

const initialState = {
  leaveList: [],
  leaveDetails: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Fetch all Leave Requests
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

// Fetch Leave Request details
export const fetchLeaveRequestDetails = createAsyncThunk(
  "leave/details",
  async (id, { rejectWithValue, getState, dispatch }) => {
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
      const response = await axios.get(
        API_URL + `fetchLeaveDetails/${id}`,
        config
      );
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

// Fetch Approve Leave Request
export const approveLeaveAction = createAsyncThunk(
  "leave/approve",
  async (id, { rejectWithValue, getState, dispatch }) => {
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
      const response = await axios.put(
        API_URL + `fetchLeaveDetails/approve/${id}`,
        config
      );
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

// Fetch Reject Leave Request
export const rejectLeaveAction = createAsyncThunk(
  "leave/reject",
  async (id, { rejectWithValue, getState, dispatch }) => {
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
      const response = await axios.put(
        API_URL + `fetchLeaveDetails/reject/${id}`,
        config
      );
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

//filter status
export const fetchLeaveRequestsByFilter = createAsyncThunk(
  "leave/filter",
  async (filterData, { rejectWithValue, getState, dispatch }) => {
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
      const response = await axios.post(
        API_URL + "status/filter",
        filterData,
        config
      );
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
    //fetch all leave requests
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
    // fetch leave details
    builder.addCase(fetchLeaveRequestDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLeaveRequestDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.leaveDetails = action?.payload;
    });
    builder.addCase(fetchLeaveRequestDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.leaveDetails = null;
    });
    // approve
    builder.addCase(approveLeaveAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(approveLeaveAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.approve = action?.payload;
    });
    builder.addCase(approveLeaveAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.approve = null;
    });
    // reject
    builder.addCase(rejectLeaveAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(rejectLeaveAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.reject = action?.payload;
    });
    builder.addCase(rejectLeaveAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.reject = null;
    });
    // filter
    builder.addCase(fetchLeaveRequestsByFilter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLeaveRequestsByFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.filter = action?.payload;
    });
    builder.addCase(fetchLeaveRequestsByFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.filter = null;
    });
  },
});

export const { reset } = leaveSlices.actions;
export default leaveSlices.reducer;

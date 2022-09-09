import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "/api/employees/";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Add new employee
export const createEmployee = createAsyncThunk(
  "employee/create",
  async (employeeData, { rejectWithValue, getState, dispatch }) => {
    try {
      //get user token

      const user = getState()?.auth;
      const { userLogin } = user;

      const config = {
        headers: {
          Authorization: `Bearer ${userLogin?.token}`,
        },
      };
      console.log(userLogin?.token);

      //http call
      const response = await axios.post(
        API_URL + "create",
        employeeData,
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

// Fetch all employees
export const fetchEmployees = createAsyncThunk(
  "employee/fetch",
  async (employeeData, { rejectWithValue, getState, dispatch }) => {
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
      const response = await axios.get(API_URL + "employees", config);
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
export const employeeSlices = createSlice({
  name: "employee",
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
    //create employee
    builder.addCase(createEmployee.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.employee = action?.payload;
    });
    builder.addCase(createEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.employee = null;
    });

    //fetch all employees
    builder.addCase(fetchEmployees.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.employeeList = action?.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload;
      state.employeeList = null;
    });
  },
});

export const { reset } = employeeSlices.actions;
export default employeeSlices.reducer;

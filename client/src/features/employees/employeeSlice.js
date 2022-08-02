import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeService from "./employeeService";

// Get employee from localStorage
const employee = JSON.parse(localStorage.getItem("employee"));

const initialState = {
  employee: employee ? employee : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register employee
export const register = createAsyncThunk(
  "employees/register",
  async (employee, thunkAPI) => {
    try {
      return await employeeService.register(employee);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// // Get Employee Records
// export const getEmployees = createAsyncThunk(
//   "employees/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.employees.token;
//       return await employeeService.getEmployees(token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const employeeSlice = createSlice({
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
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employee = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.employee = null;
      });
    // .addCase(getEmployees.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getEmployees.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.goals = action.payload;
    // })
    // .addCase(getEmployees.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;

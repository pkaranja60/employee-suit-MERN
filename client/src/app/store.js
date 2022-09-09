import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";
import employeeReducer from "../features/employees/employeeSlices";
import leaveReducer from "../features/leave/leaveSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
    leave: leaveReducer,
  },
});

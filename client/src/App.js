import { Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import EmployeeList from "./pages/employees/records/EmployeesList";
import NewEmployee from "./pages/employees/new/NewEmployee";
import LeaveList from "./pages/leave application/LeaveList";
import LeaveScreen from "./pages/leave application/LeaveScreen";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        {/* Protected Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/employee+records" element={<EmployeeList />} />
        <Route path="/newemployee" element={<NewEmployee />} />
        <Route path="/leave+list" element={<LeaveList />} />
        <Route path="/leave+details/:id" element={<LeaveScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

import axios from "axios";

const API_URL = "/api/employees/";

// Register Employee
const register = async (employeeData) => {
  const response = await axios.post(API_URL, employeeData);

  if (response.data) {
    localStorage.setItem("employee", JSON.stringify(response.data));
  }

  return response.data;
};

// Get all Employee Records
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer${token}`,
    },
  };

  const response = await axios.get(API_URL + "employees", config);

  return response.data;
};

const employeeService = { register, getEmployees };

export default employeeService;

import axios from "axios";

const API_URL = "/api/employees/";

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

const employeeService = {
  getEmployees,
};

export default employeeService;

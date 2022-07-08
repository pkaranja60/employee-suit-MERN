import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { getEmployees, reset } from "../../../features/employees/employeeSlice";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "fullName", headerName: "Full Name", width: 260 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "workId", headerName: "Work Id", width: 250 },
  { field: "department", headerName: "Department", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "address", headerName: "Address", width: 200 },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const API_URL = "/api/employees/employees";

const EmployeesList = () => {
  // const dispatch = useDispatch();

  // const { employees, isLoading, isError, message } = useSelector(
  //   (state) => state.employees
  // );

  // useEffect(() => {
  //   dispatch(getEmployees());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [dispatch]);

  const [tableData, setTableData] = useState([]);

  const getEmployeeData = async () => {
    const response = await axios.get(API_URL);
    setTableData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <div className="flex h-screen justify-center bg-indigo-50 px-4 space-x-9">
          <div className="w-[90%]">
            <h2 className="font-semibold text-3xl text-gray-600 mt-6 text-left">
              Employee Records
            </h2>
            {/* <div className="flex items-center justify-center mt-10 mb-10">
              {isError && <Message severity="error">{message}</Message>}
              {isLoading && <Loader />}
            </div> */}

            <div className="mx-auto" style={{ height: 700, width: "90%" }}>
              <DataGrid
                getRowId={(r) => r._id}
                rows={tableData}
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;

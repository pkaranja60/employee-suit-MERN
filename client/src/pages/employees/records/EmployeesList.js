import React, { useEffect } from "react";
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
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import {
  fetchEmployees,
  reset,
} from "../../../features/employees/employeeSlices";

const columns = [
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

const EmployeesList = () => {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state?.employee);
  const { employeeList, isLoading, isError, message } = employee;

  useEffect(() => {
    dispatch(fetchEmployees());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <div className="flex h-screen justify-center bg-indigo-50 px-4 space-x-9">
          <div className="w-[90%]">
            <h2 className="font-semibold text-3xl text-gray-600 mt-6 mb-6 text-left">
              Employee Records
            </h2>
            <div className="flex items-center justify-center mt-10 mb-10">
              {isError && <Message severity="error">{message}</Message>}
              {isLoading && <Loader />}
            </div>

            <div className="mx-auto" style={{ height: 700, width: "90%" }}>
              <DataGrid
                getRowId={(r) => r._id}
                rows={employeeList || []}
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

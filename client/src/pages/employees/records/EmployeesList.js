import React from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 210 },
  { field: "fullName", headerName: "Full Name", width: 260 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "workId", headerName: "Work Id", width: 200 },
  { field: "department", headerName: "Department", width: 160 },
  { field: "email", headerName: "Email", width: 210 },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "address", headerName: "Address", width: 250 },
];
const data = [
  { field: "id", headerName: "ID", width: 210 },
  { field: "fullName", headerName: "Full Name", width: 260 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "workId", headerName: "Work Id", width: 200 },
  { field: "department", headerName: "Department", width: 160 },
  { field: "email", headerName: "Email", width: 210 },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "address", headerName: "Address", width: 250 },
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
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <div className="flex h-screen justify-center bg-indigo-50 px-4 space-x-9">
          <div className="mb-16">
            <h2 className="font-semibold text-3xl text-gray-600 mb-6 text-left">
              Employee Records
            </h2>
            <div style={{ height: 700, width: "100%" }}>
              <DataGrid
                getRowId={(r) => r.id}
                rows={data}
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

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 space-x-9">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-row justify-between">
            <img
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-employees-project-planing-flatart-icons-solid-flatarticons.png"
              alt="employees"
              className="p-6 h-[140px] w-[140px]"
            />
          </div>
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Company Employees</p>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-row justify-between">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-flat-icons/64/000000/external-department-university-flaticons-lineal-flat-icons.png"
              alt="departments"
              className="p-6 h-[140px] w-[140px]"
            />
          </div>
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Departments</p>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-row justify-between">
            <img
              src="https://img.icons8.com/external-glyph-geotatah/64/000000/external-apply-training-management-system-glyph-glyph-geotatah.png"
              alt="leave"
              className="p-6 h-[140px] w-[140px]"
            />
          </div>
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Leave Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

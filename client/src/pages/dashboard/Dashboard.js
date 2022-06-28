import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 space-x-9">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img
            src="https://i.imgur.com/5dmBrx6.jpg"
            alt="plant"
            className="h-auto w-full"
          />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Company Employees</p>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img
            src="https://i.imgur.com/5dmBrx6.jpg"
            alt="plant"
            className="h-auto w-full"
          />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Departments</p>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <img
            src="https://i.imgur.com/5dmBrx6.jpg"
            alt="plant"
            className="h-auto w-full"
          />
          <div className="p-5">
            <p className="text-medium mb-5 text-gray-700">Leave Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

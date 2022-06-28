import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 space-x-9">
          <p className="text-xl">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

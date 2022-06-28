import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;

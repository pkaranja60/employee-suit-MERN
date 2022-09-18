import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "./dashboard/Dashboard";

const Home = () => {
  const navigate = useNavigate();

  const auth = useSelector((state) => state?.auth);
  const { userLogin } = auth;

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  }, [navigate, userLogin]);
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

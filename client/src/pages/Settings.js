import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Settings = () => {
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
        <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 space-x-9">
          <p className="text-xl">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import React from "react";
import { Link } from "react-router-dom";

import dashboard from "../assets/images/sidebar/icons8-dashboard-layout-48.png";
import newEmployee from "../assets/images/sidebar/icons8-add-user-male-48.png";
import employees from "../assets/images/sidebar/icons8-employee-64.png";
import leaveRequests from "../assets/images/sidebar/icons8-list-48.png";
import profile from "../assets/images/sidebar/icons8-administrator-male-80.png";
import settings from "../assets/images/sidebar/icons8-settings-80.png";
import logout from "../assets/images/sidebar/icons8-logout-48.png";

const Sidebar = () => {
  return (
    <div>
      <div className="min-h-screen bg-black">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-64 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5">
                <img
                  src="https://tailus.io/images/logo.svg"
                  className="w-32"
                  alt=""
                />
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link
                    to="/"
                    className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                  >
                    {/* Placing a counter near the icons */}
                    {/* <div className=" relative inline-block">
                      <div className="absolute -top-5 left-5 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                        3
                      </div>
                      <img src={dashboard} alt="Logo" width="25" height="25" />
                    </div> */}

                    <img src={dashboard} alt="Logo" width="25" height="25" />

                    <span className="-mr-1 font-medium">Dashboard</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/newemployee"
                    className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-700"
                  >
                    <img src={newEmployee} alt="Logo" width="25" height="25" />
                    <span className="group-hover:text-gray-700">
                      Add Employee Records
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/employee+records"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-700"
                  >
                    <img src={employees} alt="Logo" width="25" height="25" />
                    <span className="group-hover:text-gray-700">
                      Employee Records
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/leave+list"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-700"
                  >
                    <img
                      src={leaveRequests}
                      alt="Logo"
                      width="25"
                      height="25"
                    />
                    <span className="group-hover:text-gray-700">
                      Leave Requests
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/profile"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-700"
                  >
                    <img src={profile} alt="Logo" width="25" height="25" />
                    <span className="group-hover:text-gray-700">Profile</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/settings"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-700"
                  >
                    <img src={settings} alt="Logo" width="25" height="25" />
                    <span className="group-hover:text-gray-700">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-max -mb-3">
              <Link
                to="/"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-700"
              >
                <img src={logout} alt="Logo" width="25" height="25" />
                <span className="group-hover:text-gray-700">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

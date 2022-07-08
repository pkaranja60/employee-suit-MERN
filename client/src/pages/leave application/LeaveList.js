import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LeaveList = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center">
      <Sidebar />

      <div className="w-screen">
        <Navbar />

        <section className="w-full bg-indigo-50 text-gray-600 h-screen">
          <div className="flex flex-col items-center h-full">
            {/* <!-- Table --> */}
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-16">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Leave Requests</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">#</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Employee Name
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Department
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Date Applied
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Leave Status
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr // key={leaveRequest.id}
                      >
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {" "}
                            {/* {leaveRequest.id} */}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://unc.nc/wp-content/uploads/2020/07/Portrait_Placeholder.png"
                                width="40"
                                height="40"
                                alt="employee"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {" "}
                              {/* {leaveRequest.employee &&
                                            leaveRequest.employee.fullName} */}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {" "}
                            {/* {leaveRequest.created.substring(0, 10)} */}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {" "}
                            {/* {leaveRequest.status} */}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">
                            <Link
                              to="#" // to={`/leave/${leaveRequest.id}`}
                            >
                              <button className="bg-gray-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white  rounded-sm px-4 py-2">
                                Details
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaveList;

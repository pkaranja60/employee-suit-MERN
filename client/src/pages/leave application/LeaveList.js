import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LeaveList = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="flex h-screen justify-center bg-indigo-50 px-4 space-x-9">
          <div className="flex-col mt-16">
            <div className="overflow-x sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-blue-300 border-b">
                      <tr>
                        <th
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                          scope="colSpan"
                        >
                          #
                        </th>
                        <th
                          scope="colSpan"
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                        >
                          Employee Name
                        </th>
                        <th
                          scope="colSpan"
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                        >
                          Department
                        </th>
                        <th
                          scope="colSpan"
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                        >
                          Date Applied
                        </th>
                        <th
                          scope="colSpan"
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                        >
                          Leave Status
                        </th>
                        <th
                          scope="colSpan"
                          className="text-sm font-semibold text-gray-900 px-6 py-4 text-left"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        // key={leaveRequest.id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {/* {leaveRequest.id} */}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {/* {leaveRequest.employee &&
                            leaveRequest.employee.fullName} */}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {/* {leaveRequest.employee &&
                            leaveRequest.employee.fullName} */}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {/* {leaveRequest.created.substring(0, 10)} */}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {/* {leaveRequest.status} */}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link
                            to="#"
                            //  to={`/leave/${leaveRequest.id}`}
                          >
                            <button className="bg-gray-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white  rounded-sm px-4 py-2">
                              Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveList;

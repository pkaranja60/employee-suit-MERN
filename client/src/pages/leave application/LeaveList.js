import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  fetchLeaveRequests,
  fetchLeaveRequestsByFilter,
  reset,
} from "../../features/leave/leaveSlices";

const LeaveList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const auth = useSelector((state) => state?.auth);
  const { userLogin } = auth;

  const leave = useSelector((state) => state?.leave);
  const { leaveList, isLoading, isError, message } = leave;

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }

    dispatch(fetchLeaveRequests());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, userLogin]);

  const handleSearch = (e) => {
    setText(e.target.value);

    dispatch(
      fetchLeaveRequestsByFilter({ type: "text", query: e.target.value })
    );
  };
  return (
    <div className="flex flex-row h-screen overflow-hidden items-center">
      <Sidebar />

      <div className="w-screen">
        <Navbar />

        <section className="w-full bg-indigo-50 text-gray-600 h-screen">
          <form>
            <div>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className="ml-16 mt-10 mb-5 w-[88%] px-4 py-3 rounded-lg bg-gray-50 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                value={text}
                onChange={handleSearch}
              />
            </div>
          </form>

          <div className="flex flex-col items-center h-full">
            {/* <!-- Table --> */}
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Message severity="error">{message}</Message>
            ) : (
              <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-5 text-center">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">
                    Leave Requests
                  </h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs text-center font-medium uppercase text-gray-600 bg-gray-50 ">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left ">#</div>
                          </th>

                          <th className="p-2 whitespace-nowrap ">
                            <div className="font-semibold text-left mr-3">
                              Employee Name
                            </div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left mr-3">
                              Department
                            </div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left mr-3">
                              Date Applied
                            </div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left mr-3">
                              Leave Status
                            </div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left mr-3"></div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-lg divide-y divide-gray-100 space-x-5">
                        {leaveList.map((leave) => (
                          <tr key={leave._id}>
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
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="font-medium mr-3 text-gray-800">
                                {leave.employee && leave.employee.fullName}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="font-medium text-gray-800 mr-3">
                                {leave.employee && leave.employee.department}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left mr-3">
                                {new Date(leave.createdAt).toLocaleString(
                                  "en-UK"
                                )}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              {leave.isApproved ? (
                                <div className="text-lg text-green-500 text-center font-medium">
                                  {leave.status}
                                </div>
                              ) : leave.isRejected ? (
                                <div className="text-lg text-red-500 text-center font-medium">
                                  {leave.status}
                                </div>
                              ) : (
                                <div className="text-lg text-grey-400 text-center font-medium">
                                  {leave.status}
                                </div>
                              )}
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center mr-3">
                                <Link to={`/leave+details/${leave._id}`}>
                                  <button className="bg-gray-500 hover:bg-indigo-500 focus:bg-indigo-500 text-white  rounded-sm px-4 py-2">
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaveList;

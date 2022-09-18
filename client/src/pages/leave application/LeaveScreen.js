import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  approveLeaveAction,
  fetchLeaveRequestDetails,
  rejectLeaveAction,
  reset,
} from "../../features/leave/leaveSlices";

const LeaveScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state?.auth);
  const { userLogin } = auth;

  const details = useSelector((state) => state?.leave);
  const { leaveDetails, isLoading, isError, message, approve, reject } =
    details;

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }

    dispatch(fetchLeaveRequestDetails(id));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, id, approve, reject, userLogin, navigate]);

  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />
        <div className="flex h-screen items-center justify-center bg-indigo-50 px-4 space-x-9">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <p className="text-gray-600 text-center font-bold text-4xl mb-10">
              Leave Details
            </p>
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Message severity="error">{message}</Message>
            ) : (
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-center space-y-5 m-3">
                  <img
                    src="https://unc.nc/wp-content/uploads/2020/07/Portrait_Placeholder.png"
                    alt="Profile"
                    className="h-[250px] w-[250px] rounded-full mx-auto"
                  />

                  <div className="flex flex-col space-y-3">
                    <span className="text-lg font-semibold">
                      {leaveDetails.employee && leaveDetails.employee.fullName}
                    </span>
                    <span className="text-md font-semibold">
                      {leaveDetails.employee &&
                        leaveDetails.employee.department}
                    </span>
                    <span className="text-md font-semibold">
                      {leaveDetails.employee && leaveDetails.employee.email}
                    </span>
                    <span className="text-md font-semibold">
                      {leaveDetails.employee && leaveDetails.employee.phone}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-2  mx-auto ">
                  {leaveDetails.isApproved ? (
                    <div className="text-xl text-green-500 text-center font-semibold">
                      {leaveDetails.status}
                    </div>
                  ) : leaveDetails.isRejected ? (
                    <div className="text-xl text-red-500 text-center font-semibold">
                      {leaveDetails.status}
                    </div>
                  ) : (
                    <div className="text-xl text-grey-400 text-center font-semibold">
                      {leaveDetails.status}
                    </div>
                  )}
                  <div className="flex justify-evenly">
                    <span className="text-lg m-5">
                      <p className="font-semibold">Start Date : </p>
                      {new Date(leaveDetails.startDate).toLocaleString("en-UK")}
                    </span>
                    <span className="text-lg m-5 ml-20">
                      <p className="font-semibold">End Date : </p>
                      {new Date(leaveDetails.endDate).toLocaleString("en-UK")}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-lg m-5 mt-5">
                      <p className="font-semibold">Type of Leave : </p>
                      {leaveDetails.leaveType}
                    </span>
                    <span className="text-lg m-5 mt-5">
                      <p className="font-semibold">Description : </p>
                      {leaveDetails.description}
                    </span>
                  </div>

                  <div className="flex justify-evenly items-center mt-20">
                    <button
                      onClick={() => dispatch(approveLeaveAction(id))}
                      className="bg-green-500 py-3 px-5 rounded hover:bg-green-700 hover:text-white hover:font-medium text-center text-xl font-semibold"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => dispatch(rejectLeaveAction(id))}
                      className="ml-20 bg-red-500 py-3 px-5 rounded hover:bg-red-700 hover:text-black text-white text-center text-xl"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveScreen;

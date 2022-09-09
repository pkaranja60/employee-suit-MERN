import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

const LeaveScreen = () => {
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
                    <span className="text-lg font-semibold">Applicant</span>
                    <span className="text-md font-semibold">Department</span>
                    <span className="text-md font-semibold">Email</span>
                    <span className="text-md font-semibold">Mobile</span>
                  </div>
                </div>

                <div className="lg:col-span-2  mx-auto ">
                  <div className="text-xl font-semibold">
                    {/* {leaveRequest.status} */}
                  </div>

                  <div className="flex justify-evenly">
                    <span className="text-lg m-5">Start Date : </span>
                    <span className="text-lg m-5 ml-20">End Date :</span>
                  </div>

                  <div className="flex flex-col m">
                    <span className="text-lg m-5 mt-10">Type of Leave :</span>
                    <span className="text-lg m-5 mt-10">Description : </span>
                  </div>

                  <div className="flex justify-evenly items-center mt-20">
                    <button className="bg-green-500 py-3 px-5 rounded hover:bg-green-700 hover:text-white hover:font-medium text-center text-xl font-semibold">
                      Approve
                    </button>

                    <button className="ml-20 bg-red-500 py-3 px-5 rounded hover:bg-red-700 hover:text-black text-white text-center text-xl">
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

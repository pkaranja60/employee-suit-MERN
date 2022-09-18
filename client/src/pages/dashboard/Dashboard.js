import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../features/employees/employeeSlices";
import { fetchLeaveRequests } from "../../features/leave/leaveSlices";

const Dashboard = () => {
  const dispatch = useDispatch();

  const leave = useSelector((state) => state?.leave);
  const { leaveList } = leave;

  const employee = useSelector((state) => state?.employee);
  const { employeeList } = employee;

  useEffect(() => {
    dispatch(fetchLeaveRequests());

    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div className="bg-indigo-50 flex h-screen justify-center">
      <section className="dark:bg-gray-900 items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Departments
              </h2>
              <p className="text-right text-9xl mb-5 mt-5 font-medium text-gray-500">
                5
              </p>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Employees
              </h2>
              <p className="text-right text-9xl mb-5 mt-5 font-medium text-gray-500">
                {employeeList?.length}
              </p>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Leave Applications submitted
              </h2>
              <p className="text-right text-9xl mb-5 mt-5 font-medium text-gray-500 ">
                {leaveList?.length}
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

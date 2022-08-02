import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../../features/employees/employeeSlice";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import InputForm from "../../../constants/InputForm";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";

const NewEmployee = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [workId, setWorkId] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [county, setCounty] = useState("");

  const { isLoading, isError, message } = useSelector(
    (state) => state.employees
  );

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const Data = {
      fullName,
      gender,
      workId,
      department,
      email,
      phone,
      address,
      zipCode,
      county,
    };

    dispatch(register(Data));

    setFullName("");
    setWorkId("");
    setDepartment("");
    setGender("");
    setEmail("");
    setPhone("");
    setAddress("");
    setZipCode("");
    setCounty("");
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden items-center justify-center">
      <Sidebar />
      <div className="w-screen">
        <Navbar />

        <div className="flex h-screen justify-center bg-indigo-50 px-4 space-x-9">
          <div className="mt-16">
            <h2 className="font-semibold text-xl text-gray-800 mb-6">
              Employee Detail Form
            </h2>

            <div className="flex items-center justify-center space-x-5 mt-10 mb-10">
              {isError && <Message severity="error">{message}</Message>}
              {isLoading && <Loader />}
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600 text-center">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                  <img
                    src="https://unc.nc/wp-content/uploads/2020/07/Portrait_Placeholder.png"
                    alt="Profile"
                    className="h-[250px] w-[250px] rounded-full mx-auto mt-10"
                  />
                </div>

                <div className="lg:col-span-2 mt-10">
                  <InputForm
                    fullName={fullName}
                    setFullName={setFullName}
                    workId={workId}
                    setWorkId={setWorkId}
                    gender={gender}
                    setGender={setGender}
                    department={department}
                    setDepartment={setDepartment}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    county={county}
                    setCounty={setCounty}
                    onSubmit={onSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEmployee;

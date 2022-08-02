import React from "react";
import Select from "react-select";

const sex = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const InputForm = ({
  fullName,
  setFullName,
  workId,
  setWorkId,
  // selectedOptions,
  // setSelectedOptions,
  department,
  setDepartment,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  zipCode,
  setZipCode,
  county,
  setCounty,
  onSubmit,
  gender,
  setGender,
}) => {
  return (
    <form action="" methods="POST" className="mt-6" onSubmit={onSubmit}>
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="full_name">Gender</label>
          <Select
            options={sex}
            defaultValue={gender ? gender : ""}
            onChange={(choice) => setGender(choice.value)}
          />
        </div>

        {/* <div className="md:col-span-2">
          <label htmlFor="full_name">Gender</label>
          <input
            type="text"
            name="work_id"
            id="work_id"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div> */}

        <div className="md:col-span-3">
          <label htmlFor="full_name">Work Id</label>
          <input
            type="text"
            name="work_id"
            id="work_id"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            required
            value={workId}
            onChange={(e) => setWorkId(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="full_name">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="email@domain.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email">Phone Number</label>
          <input
            type="text"
            name="mobile"
            id="email"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="+2547....."
            required
            value={phone}
            min="10"
            max="10"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address">Address / Street</label>
          <input
            type="text"
            name="address"
            id="address"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="zipCode">ZipCode</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder=""
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="city">County</label>
          <input
            type="text"
            name="city"
            id="city"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder=""
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </div>

        <div className="md:col-span-5 text-right mt-4">
          <div className="inline-flex items-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;

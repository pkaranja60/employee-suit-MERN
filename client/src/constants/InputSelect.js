import React, { useState } from "react";
import Select from "react-select/select";

const gender = [
  { value: "male", label: "Chocolate" },
  { value: "female", label: "Strawberry" },
];

const InputSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  return (
    <Select
      options={gender}
      defaultValue={selectedOptions}
      onchange={setSelectedOptions}
    />
  );
};

export default InputSelect;

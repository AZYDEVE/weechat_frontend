import React from "react";
import Select from "react-select";

// const options = [
//   { label: "React", value: "react" },
//   { label: "HTML", value: "html" },
//   { label: "Java", value: "java" },
// ];
const UserSelect = ({ options, onChange }) => {
  return (
    <div>
      <Select
        isMulti={true}
        options={options}
        placeholder="select your friends"
        onChange={onChange}></Select>
    </div>
  );
};

export default UserSelect;

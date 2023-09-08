import React from "react";

const LargeInput = ({ title, formData, variable, setFormData }) => {
  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
        htmlFor="grid-password"
      >
        {title}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500" />
        <textarea
          className=" font-bold appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pt-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={formData[variable]}
          onChange={(e) =>
            setFormData({ ...formData, [variable]: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default LargeInput;

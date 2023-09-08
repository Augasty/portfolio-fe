import React from "react";

const SmallInput = ({ title, formData, variable, setFormData }) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6">
      <label
        className="block uppercase tracking-wide text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        {title}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        value={formData[variable]}
        onChange={(e) =>
          setFormData({ ...formData, [variable]: e.target.value })
        }
      />
    </div>
  );
};

export default SmallInput;

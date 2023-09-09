import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./styles.css";
import IndexedInput from "./Inputs/IndexedInput";

export default function EducationalDetails() {
  const navigate = useNavigate();

  const initialFormData = {
    user_id: uuidv4(),
    institution_Name: "",
    location: "",
    major: "",
    description: "",
    start_date: "",
    end_date: "",
  };

  const [formData, setFormData] = useState([initialFormData]);
  const [repeatCount, setRepeatCount] = useState(1);

  const handleRepeatClick = () => {
    setRepeatCount(repeatCount + 1);
    setFormData([...formData, initialFormData]);
  };

  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData];

    updatedFormData[index] = {
      ...updatedFormData[index],
      [field]: value,
    };
    setFormData(updatedFormData);
  };

  // const handleFormSubmit = ( event) => {
  //   event.preventDefault();
  //   // Handle form submission if needed
  //   console.log(`Form  submitted with data:`, formData);
  // };
  // need an useeffect that will fetch data for existing user when the page is loaded.
  // anupam da to create the api to get data of a single user. - sayak 8.9.23
  const goBack = (e) => {
    e.preventDefault();

    // should we submit if we go back, need to discuss. -sayak 8.9.23
    navigate("/basic");
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("www.api.com", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log(formData);
      // navigate("/experience");
    }
  };

  return (
    <>
      <div className="text-center mb-16 my-10">
        <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white-900">
          Education <span className="text-indigo-600">Details</span>
        </h3>
      </div>

      <div className="container-fluid mx-10">
        <div className="max-w-screen-md mx-auto p-5">
          {Array.from({ length: repeatCount }, (_, index) => (
            <form
              className="Content w-full"
              key={index}
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <IndexedInput
                  small={false}
                  title="Institution Name"
                  formData={formData}
                  index={index}
                  variable="institution_Name"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={false}
                  title="Location"
                  formData={formData}
                  index={index}
                  variable="location"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={false}
                  title="Major"
                  formData={formData}
                  index={index}
                  variable="major"
                  handleChange={handleChange}
                />

                <IndexedInput
                  small={false}
                  title="Description"
                  formData={formData}
                  index={index}
                  variable="description"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={true}
                  title="Start Date"
                  formData={formData}
                  index={index}
                  variable="start_date"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={true}
                  title="End Date"
                  formData={formData}
                  index={index}
                  variable="end_date"
                  handleChange={handleChange}
                />
              </div>
            </form>
          ))}

          <div className="w-full flex justify-center mt-4">
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8" // Added "mr-2" for right margin
              type="button"
              onClick={(e) => goBack(e)}
            >
              Back
            </button>
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8"
              type="button"
              onClick={handleRepeatClick}
            >
              Add experience
            </button>
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4"
              type="submit"
              onClick={handleFormSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./styles.css";
import SmallInput from "./Inputs/SmallInput";
import LargeInput from "./Inputs/LargeInput";

export default function EducationalDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_id: uuidv4(),
    institution_Name: "",
    location: "",
    major: "",
    description: "",
    start_date: "",
    end_Date: "",
  });

  // need an useeffect that will fetch data for existing user when the page is loaded.
  // anupam da to create the api to get data of a single user. - sayak 8.9.23
  const goBack = (e) => {
    e.preventDefault();

    // should we submit if we go back, need to discuss. -sayak 8.9.23
    navigate("/basic");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("www.api.com", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log(formData);
      navigate("/experience");
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
          <form className="Content w-full" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <LargeInput
                title="Institution Name"
                formData={formData}
                variable="institution_Name"
                setFormData={setFormData}
              />
              <LargeInput
                title="Institution Location"
                formData={formData}
                variable="location"
                setFormData={setFormData}
              />
              <LargeInput
                title="Major"
                formData={formData}
                variable="major"
                setFormData={setFormData}
              />
              <LargeInput
                title="Description"
                formData={formData}
                variable="description"
                setFormData={setFormData}
              />

              <SmallInput
                title="Starting date"
                formData={formData}
                variable="start_date"
                setFormData={setFormData}
              />
              <SmallInput
                title="Ending date"
                formData={formData}
                variable="end_date"
                setFormData={setFormData}
              />

              <div className="w-full flex justify-center mt-4">
                <button
                  className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8" // Added "mr-2" for right margin
                  type="button"
                  onClick={(e) => goBack(e)}
                >
                  Back
                </button>
                <button
                  className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

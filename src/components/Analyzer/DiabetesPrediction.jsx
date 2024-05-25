import React, { useState } from "react";
import axios from "axios";

const DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodpressure: "",
    skinthickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/predict/diabetes", formData);
      const result = await axios.get("http://localhost:5000/result");
      setPrediction(result.data.prediction);
    } catch (error) {
      console.error("There was an error making the request", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Diabetes Prediction
      </h1>
      <h5 className="text-lg text-center mb-6">
        Please enter the patient details
      </h5>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pregnancies"
            >
              Number of Pregnancies
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="pregnancies"
              value={formData.pregnancies}
              onChange={handleChange}
              placeholder="eg. 0 for male"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="glucose"
            >
              Glucose Level (mg/dL)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
              placeholder="eg. 80"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="bloodpressure"
            >
              Blood Pressure (mmHg)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="bloodpressure"
              value={formData.bloodpressure}
              onChange={handleChange}
              placeholder="eg. 80"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="skinthickness"
            >
              Skin Thickness (mm)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="skinthickness"
              value={formData.skinthickness}
              onChange={handleChange}
              placeholder="eg. 20"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="insulin"
            >
              Insulin Level (IU/mL)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="insulin"
              value={formData.insulin}
              onChange={handleChange}
              placeholder="eg. 80"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="bmi"
            >
              Body Mass Index (kg/m²)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              placeholder="eg. 23.1"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dpf"
            >
              Diabetes Pedigree Function
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="dpf"
              value={formData.dpf}
              onChange={handleChange}
              placeholder="eg. 0.52"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="age"
            >
              Patient Age in Years
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="eg. 34"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Predict
        </button>
      </form>
      {prediction && (
        <div className="text-center mt-8">
          <h3 className="text-xl">Prediction Result: {prediction}</h3>
        </div>
      )}
    </div>
  );
};

export default DiabetesPrediction;

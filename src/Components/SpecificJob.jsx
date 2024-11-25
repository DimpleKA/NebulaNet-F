import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SpecificJob = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/jobs/${jobId}`);
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("address", e.target.address.value);
    formData.append("image", e.target.image.files[0]);
    formData.append("pdf", e.target.pdf.files[0]);
    formData.append("audio", e.target.audio.files[0]);
    formData.append("video", e.target.video.files[0]);
    formData.append("cv", e.target.cv.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Files uploaded successfully: " + response.data.message);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Failed to upload files.");
    }
  };

  return (
    <div>
      <h1 className="pb-10">Job Details</h1>

      {jobDetails ? (
        <div className="max-w-4xl mx-auto mb-10 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {jobDetails.title}
          </h2>
          <p className="text-gray-600 mb-4">{jobDetails.description}</p>
          <p className="text-gray-600 font-semibold">
            Location: {jobDetails.location}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading job details...</p>
      )}

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Application Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg"
               
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="Enter your address"
              className="mt-1 block w-full px-3 py-2 border rounded-lg"
               
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input type="file" id="image" name="image" accept="image/*"   />
          </div>

          <div className="mb-4">
            <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
              Upload PDF
            </label>
            <input type="file" id="pdf" name="pdf" accept="application/pdf"   />
          </div>

          <div className="mb-4">
            <label htmlFor="audio" className="block text-sm font-medium text-gray-700">
              Upload Audio
            </label>
            <input type="file" id="audio" name="audio" accept="audio/*" />
          </div>

          <div className="mb-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
              Upload Video
            </label>
            <input type="file" id="video" name="video" accept="video/*" />
          </div>

          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
              Upload CV
            </label>
            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx"   />
          </div>

          <button type="submit" className="w-full bg-slate-800 text-white py-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SpecificJob;

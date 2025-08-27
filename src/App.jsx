import React, { useState } from "react";
import { FaUpload, FaEnvelope } from "react-icons/fa";

export default function AssignmentUpload() {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !file) {
      setStatusMessage("Please provide both email and file.");
      return;
    }

    const formData = new FormData();
    formData.append("user_email", email);
    formData.append("file", file);

    try {
      setLoading(true);
      setStatusMessage("");

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setStatusMessage(
          "✅ Assignment submitted! You will receive it soon. If you don't get it within 2 minutes, let me know."
        );
      } else {
        const errorData = await response.json();
        setStatusMessage(
          errorData.detail || "Upload failed. Please tell me if this happens."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Something went wrong. Please tell me.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Instructions */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 w-full max-w-2xl rounded-lg shadow">
        <h3 className="font-bold">Instructions:</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Enter your email and upload your assignment file.</li>
          <li>After submitting, wait up to <b>2 minutes</b> for your response.</li>
          <li>If you don't receive it or see an error, tell me immediately.</li>
        </ul>
      </div>

      {/* Upload Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              Upload Assignment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="bg-gray-200 px-3 text-gray-600">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="w-full p-3 outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* File Upload */}
              <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full text-gray-700"
                />
                <FaUpload className="text-gray-500 ml-3" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Submit"}
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <p className="mt-4 text-center text-gray-700">{statusMessage}</p>
            )}
          </>
        ) : (
          <div className="text-center">
            {/* Success Animation */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-3xl">✔</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-green-700">
              Assignment Submitted!
            </h3>
            <p className="text-gray-600 mt-2">
              You will receive it soon. If you don’t get it within 2 minutes,
              tell me.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

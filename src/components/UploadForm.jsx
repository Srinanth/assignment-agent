import React, { useState } from 'react';
import { FaEnvelope, FaSpinner } from 'react-icons/fa';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '../utils/constants';
import FileDropzone from './FileDropzone';
import FilePreview from './ FilePreview.jsx';


const UploadForm = ({ onSubmit, loading, statusMessage }) => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');

  const handleFileChange = (selectedFile) => {
    if (!selectedFile) return;

    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setFileError(`File is too large. Maximum size is ${MAX_FILE_SIZE_MB}MB.`);
      setFile(null); 
      return;
    }

    setFile(selectedFile);
    setFileError(''); 
  };
  
  const {
    isDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useDragAndDrop(handleFileChange);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !file) {
      return;
    }
    onSubmit(email, file);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
        Upload Your Assignment
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="relative">
          <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            className="w-full p-3 pl-12 text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        {/* File Input & Preview */}
        {!file ? (
          <FileDropzone
            onFileSelect={(e) => handleFileChange(e.target.files[0])}
            isDragOver={isDragOver}
            handleDragEnter={handleDragEnter}
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        ) : (
          <FilePreview file={file} onRemove={() => setFile(null)} />
        )}
        
        {/* Error Display */}
        {(statusMessage || fileError) && (
            <p className="text-center font-medium text-red-600">
                {statusMessage || fileError}
            </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg flex items-center justify-center hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all duration-300"
          disabled={loading || !file || !email}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Uploading...
            </>
          ) : (
            'Submit Assignment'
          )}
        </button>
      </form>
    </>
  );
};

export default UploadForm;

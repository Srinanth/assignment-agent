import React from 'react';
import { FaUpload } from 'react-icons/fa';

/**
 * A reusable file dropzone component.
 */
const FileDropzone = ({ onFileSelect, isDragOver, handleDragEnter, handleDragLeave, handleDragOver, handleDrop }) => (
  <div
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    <label
      htmlFor="file-upload"
      className={`flex flex-col items-center justify-center w-full h-40 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-50
      ${isDragOver ? 'border-blue-500 bg-blue-50' : ''}`}
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
        <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">PDF, DOCX, PNG, JPG (MAX. 5MB)</p>
      </div>
      <input
        id="file-upload"
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        onChange={onFileSelect}
        className="hidden"
      />
    </label>
  </div>
);

export default FileDropzone;

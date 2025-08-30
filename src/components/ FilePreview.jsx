import React from 'react';
import { FaFileAlt, FaTimes } from 'react-icons/fa';


const FilePreview = ({ file, onRemove }) => (
  <div className="flex items-center justify-between w-full p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
    <div className="flex items-center gap-3 overflow-hidden">
      <FaFileAlt className="text-indigo-500 flex-shrink-0" />
      <div className="text-sm truncate">
        <p className="font-semibold text-gray-800 truncate" title={file.name}>{file.name}</p>
        <p className="text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
      </div>
    </div>
    <button onClick={onRemove} type="button" className="p-1 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-600 flex-shrink-0 ml-2">
      <FaTimes />
    </button>
  </div>
);

export default FilePreview;

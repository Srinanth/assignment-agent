import React from 'react';
import { FaCheck } from 'react-icons/fa';

/**
 * Displays a success message after the form has been submitted.
 */
const SuccessView = ({ onNewSubmission }) => (
  <div className="text-center py-8">
    <div className="flex justify-center mb-4">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <FaCheck className="text-white text-3xl" />
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-bold text-green-700">
      Assignment Submitted!
    </h3>
    <p className="text-gray-600 mt-2 max-w-sm mx-auto">
      Your assignment has been received and is being evaluated by our AI agent.
      You’ll get the detailed answers and explanations in your email shortly.
    </p>
    <button
      onClick={onNewSubmission}
      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Submit Another Assignment
    </button>
  </div>
);

export default SuccessView;

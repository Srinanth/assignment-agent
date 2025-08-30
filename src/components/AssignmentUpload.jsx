import React from 'react';
import { useFileUpload } from '../hooks/useFileUpload';
import Instructions from './Instructions';
import UploadForm from './UploadForm';
import SuccessView from './SuccessView';

export default function AssignmentUpload() {
  const {
    loading,
    submitted,
    statusMessage,
    handleSubmit,
    resetSubmission,
  } = useFileUpload();

  return (
    <div className="w-full max-w-2xl">
      <Instructions />
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full transition-all duration-300 border-l-4 border-blue-400">
        {!submitted ? (
          <UploadForm
            onSubmit={handleSubmit}
            loading={loading}
            statusMessage={statusMessage}
          />
        ) : (
          <SuccessView onNewSubmission={resetSubmission} />
        )}
      </div>
    </div>
  );
}

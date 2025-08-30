import { useState, useCallback } from 'react';
import { API_URL } from '../utils/constants';

/**
 * Custom hook to manage the file upload logic, state, and API interaction.
 */
export const useFileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = useCallback(async (email, file) => {
    if (!email || !file) {
      setStatusMessage('Please provide both your email and a file.');
      return;
    }

    const formData = new FormData();
    formData.append('user_email', email);
    formData.append('file', file);

    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setStatusMessage('');
      } else {
        let errorMessage = 'Upload failed. Please try again.';
        try {
          const errorData = await response.json();
          if (errorData?.message) {
            errorMessage = errorData.message;
          }
        } catch {
        }
        setStatusMessage(errorMessage);
        setSubmitted(false); 
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatusMessage('Something went wrong. Please check your connection and try again.');
      setSubmitted(false); 
    } finally {
      setLoading(false);
    }
  }, []);

  const resetSubmission = useCallback(() => {
    setSubmitted(false);
    setStatusMessage('');
    setLoading(false);
  }, []);

  return { loading, submitted, statusMessage, handleSubmit, resetSubmission };
};

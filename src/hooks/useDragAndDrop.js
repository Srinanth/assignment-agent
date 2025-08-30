import { useState, useCallback } from 'react';

/**
 * Custom hook to encapsulate drag and drop logic.
 * @param {function} onDropCallback - The function to call with the dropped file.
 */
export const useDragAndDrop = (onDropCallback) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation(); 
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDropCallback(e.dataTransfer.files[0]);
      e.dataTransfer.clearData(); 
    }
  }, [onDropCallback]);

  return {
    isDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  };
};

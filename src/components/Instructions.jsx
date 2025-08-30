import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Instructions = () => (
  <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 mb-1 rounded-r-lg rounded-l-lg shadow-sm">
    <h3 className="font-bold flex items-center gap-2">
      <FaInfoCircle />
      How This Works
    </h3>
    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
      <li> Upload in <b>PDF</b><span className="font-normal text-blue-600 text-xs ml-1">(recommended)</span>, <b>DOCX</b>, <b>PPTX</b>, or image format (<b>PNG</b><span className="font-normal text-blue-600 text-xs ml-1">(recommended)</span>, <b>JPG</b>). </li>
      <li>The maximum file size is <b>5MB</b>. If your file is larger, try compressing or splitting it.</li>
      <li>After submission, our <b>AI agent</b> will analyze your work and generate <b>feedback, grades, or <b className="ml-5">suggestions</b></b>.</li>
      <li>You’ll receive the evaluated assignment in your email within <b>2 minutes</b>.</li>
      <li>If you don’t see an email, please check your <b>Spam/Promotions</b> folder first.</li>
      <li>Your files are processed <b>securely</b> and never shared with anyone else.</li>
    </ul>
  </div>
);

export default Instructions;

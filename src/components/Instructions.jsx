import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Instructions = () => (
  <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 mb-1 rounded-r-lg rounded-l-lg shadow-sm">
    <h3 className="font-bold flex items-center gap-2">
      <FaInfoCircle />
      How This Works
    </h3>
<ul className="list-disc list-inside text-sm mt-2 space-y-1">
  <li>
    Upload your assignment as <b>PDF</b>
    <span className="font-normal text-blue-600 text-xs ml-1">(recommended)</span>,
    <b> DOCX</b>, <b>PPTX</b>, or images (<b>PNG</b>
    <span className="font-normal text-blue-600 text-xs ml-1">(recommended)</span>, <b>JPG</b>).
  </li>
  <li>
    Maximum file size: <b>5MB</b>. If your file is larger, please compress or split it.
  </li>
  <li>
    The agent will <b>read your content</b> and <b>generate completed answers</b> using AI.
  </li>
  <li>
    You’ll receive the completed assignment via <b>email</b> or <b>Telegram</b>, usually within a few minutes.
  </li>
  <li>
    If you don’t see an email, please check your <b>Spam/Promotions</b> folder first.
  </li>
  <li>
    <b>Hosting note:</b> Since this runs on free-tier servers, the system may be offline until manually started—try again later or run locally.
  </li>
  <li>
    <b>Privacy:</b> Your files are processed securely and never shared with anyone else.
  </li>
</ul>

  </div>
);

export default Instructions;

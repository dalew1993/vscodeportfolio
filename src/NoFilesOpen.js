import React from 'react';
import { FiFile } from 'react-icons/fi';
import './NoFilesOpen.css';
import Logo from './logo.png'; // Path to your grayscale logo

const NoFilesOpen = () => {
  return (
    <div className="noFilesOpen">
      <div className="logoDiv" style={{ backgroundImage: `url(${Logo})` }}></div>
      <FiFile size={80} className="fileLogo" />
      <p>No files open</p>
    </div>
  );
};

export default NoFilesOpen;

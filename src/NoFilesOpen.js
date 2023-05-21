import React from 'react';
import './NoFilesOpen.css';
import Logo from './logo.png'; // Path to your grayscale logo

const NoFilesOpen = () => {
  return (
    <div className="noFilesOpen">
      <div className="logoDiv" style={{ backgroundImage: `url(${Logo})` }}></div>
    </div>
  );
};

export default NoFilesOpen;

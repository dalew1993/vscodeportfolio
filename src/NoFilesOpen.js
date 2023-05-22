import React from 'react';
import './NoFilesOpen.css';
import Logo from './logo.png'; // Path to your grayscale logo
import { FiFile } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const NoFilesOpen = () => {
  return (
    <div className="noFilesOpen">
      <div className="logoDiv" style={{ backgroundImage: `url(${Logo})` }}></div>
      <div className="fileLogoRow">
        <FiFile className="fileLogo" />
        <span className="fileText">Files</span>
      </div>
      <div className="githubLogoRow">
        <AiFillGithub className="githubLogo" />
        <span className="githubText">GitHub Page</span>
      </div>
      <div className="linkedinLogoRow">
        <AiFillLinkedin className="linkedinLogo" />
        <span className="linkedinText">LinkedIn Page</span>
      </div>
      <div className="emailLogoRow">
        <MdEmail className="emailLogo" />
        <span className="emailText">Email</span>
      </div>
    </div>
  );
};

export default NoFilesOpen;

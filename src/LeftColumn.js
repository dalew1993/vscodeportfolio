import React from 'react';
import { FiFile } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './LeftColumn.css';

const LeftColumn = ({ toggleFileColumn }) => {
  const handleGithubClick = () => {
    // Replace this URL with your GitHub profile URL
    const githubUrl = 'https://github.com/your-github-profile';
    window.open(githubUrl, '_blank');
  };

  const handleLinkedInClick = () => {
    // Replace this URL with your LinkedIn profile URL
    const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
    window.open(linkedinUrl, '_blank');
  };

  const handleEmailClick = () => {
    // Replace this email with your own email address
    const email = 'your-email@example.com';
    const subject = 'Contact Inquiry';
    const body = 'Hello, I would like to get in touch with you.';
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl);
  };

  return (
    <div className="leftColumn">
      <FiFile className="icon" onClick={toggleFileColumn} />
      <AiFillGithub className="icon" onClick={handleGithubClick} />
      <AiFillLinkedin className="icon" onClick={handleLinkedInClick} />
      <MdEmail className="icon" onClick={handleEmailClick} />
    </div>
  );
};

export default LeftColumn;

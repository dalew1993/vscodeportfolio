import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Cv.css';

const CV = () => {
  const cvString = `
    function createCV() {
      const cv = {
        name: 'Dale Warburton',
      };

      return cv;
    }

    createCV();
  `;

  const customStyle = {
    background: '#333333',
    padding: '10px',
    borderRadius: '5px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#dcdcaa',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '5px',
    background: '#333333',
    marginBottom: '10px',
    fontFamily: 'Courier New',
    fontSize: '12px',
  };

  const consoleStyle = {
    color: '#18D1C7', // Use color code matching the "console" keyword color in your syntax highlighter
  };

  const dotStyle = {
    margin: '0',
  };

  const handleCVClick = () => {
    // Replace this URL with the link to your CV
    const cvUrl = 'https://your-cv-url.com';
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="cv">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
        {cvString}
      </SyntaxHighlighter>
      <div onClick={handleCVClick} style={linkStyle}>
        <span style={consoleStyle}>console</span>
        <span style={dotStyle}>.</span>
        log(createCv());
      </div>
    </div>
  );
};

export default CV;

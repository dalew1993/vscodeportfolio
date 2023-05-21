// Home.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Home.css'; // Import the CSS file

const Home = () => {
  const codeString = `
  // Welcome to my portfolio site
  
  function helloWorld() {
    const name = 'Dale Warburton';
    const role = 'Junior Software Developer';
  }
    console.log('Hello, I am ' + name + ', a ' + role + '.');
  `;

  const customStyle = {
    background: '#333333',
    padding: '10px',
    borderRadius: '5px',
    
  };

  return (
    <div className="homePage">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Home;

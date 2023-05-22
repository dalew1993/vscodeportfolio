import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Projects = () => {
  const codeString1 = `
  function PlanPerfect() {
    const name = 'PlanPerfect';
    const description = 'An Event and Task Management app.';
    const technologies = 'Python, Flask, SQL';
    const githubLink = 'https://github.com/warbyd/Python-Project-Events-Planner';
  }
  
  `;

  const codeString2 = `
  function LilyPad() {
    const name = 'LilyPad';
    const description = 'A social media app for Frogs!';
    const technologies = 'Javascript, React, Express, MongoDB';
    const githubLink = 'https://github.com/efgeri/LilyPad';
  }
  
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

  const PlanPerfect = () => {
    window.open('https://github.com/warbyd/Python-Project-Events-Planner', '_blank');
  }

  const LilyPad = () => {
    window.open('https://github.com/efgeri/LilyPad', '_blank');
  }

  return (
    <div className="projects">
      <div className="project">
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
          {codeString1}
        </SyntaxHighlighter>
        <div onClick={PlanPerfect} style={{ ...linkStyle, width: 'fit-content' }}>
          <span style={consoleStyle}>console</span>.log(PlanPerfect());
        </div>
      </div>
      <div className="project">
        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
          {codeString2}
        </SyntaxHighlighter>
        <div onClick={LilyPad} style={{ ...linkStyle, width: 'fit-content' }}>
          <span style={consoleStyle}>console</span>.log(Lilypad());
        </div>
      </div>
    </div>
  );
};

export default Projects;
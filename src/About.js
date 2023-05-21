import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './About.js';

const About = () => {
  const aboutString = `
  const AboutMe = {
    name: 'Dale Warburton',
    role: 'Business and Sales Professional',
    experience: [
      'Sales',
      'Marketing',
      'Analysis'
    ],
    skills: [
      'Driving sales revenue',
      'Strategic problem solving',
      'Delivering strong performance measures',
      'Fostering lasting relationships',
      'Effective communication'
    ],
    education: [
      {
        institution: 'CodeClan',
        course: 'Coding Bootcamp',
        skillsGained: [
          'Python with Flask for web development',
          'SQL for database management',
          'JavaScript with Express framework',
          'MongoDB for handling databases',
          'React library for web applications',
          'Java'
        ]
      }
    ],
    careerAspirations: 'Embarking on a new career path in the coding industry'
  };

  console.log(AboutMe())
  `;

  const customStyle = {
    background: '#333333',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div className="about">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
        {aboutString}
      </SyntaxHighlighter>
    </div>
  );
};

export default About;

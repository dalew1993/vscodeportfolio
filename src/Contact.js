import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Contact = () => {
  const contactString = `
    // Thanks for visiting!
    // Feel free to contact me 
    // to have a brief conversation 
    // or to discuss our next steps.

  function contact() {
    const cv = 'googledocs.com/yourcv'
    const email = 'dalewwarburton@gmail.com';
    const phone = '07842343344';
    const linkedIn = 'linkedin.com/in/your-profile';
    const github = 'github/com/your-profile'
  }

  console.log(contact());
  `;

  const customStyle = {
    background: '#333333',
    padding: '10px',
    borderRadius: '5px',
  };

  return (
    <div className="contact">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
        {contactString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Contact;

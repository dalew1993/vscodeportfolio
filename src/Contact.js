import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Contact = () => {
  const contactString = `
    //  Thanks for visiting! 
    //  Feel free to contact me 
    //  to have a brief conversation 
    //  or to discuss our next steps. 

    <div class="Contact">
      <h2>Contact</h2>
      <p>CV: <a href="googledocs.com/yourcv">googledocs.com/yourcv</a></p>
      <p>Email: <a href="mailto:dalewwarburton@gmail.com">dalewwarburton@gmail.com</a></p>
      <p>Phone: 07842343344</p>
      <p>LinkedIn: <a href="linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></p>
      <p>GitHub: <a href="github/com/your-profile">github/com/your-profile</a></p>
    </div>
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

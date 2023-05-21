import React from 'react';
import './FileColumn.css';
import { FiChevronRight } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';

const portfolioPages = [
  { path: '/home', name: 'Home.js' },
  { path: '/projects', name: 'Projects.js' },
  { path: '/about', name: 'About.js' },
  { path: '/cv', name: 'CV.js' },
  { path: '/contact', name: 'Contact.js' }
];

const FileColumn = () => {
  const location = useLocation();
  
  return (
    <div className="fileColumn">
      <h2>Explorer</h2>
      <div className="folder">
        <h3>
          <FiChevronRight /> Portfolio
        </h3>
        <ul>
          {portfolioPages.map((page, index) => (
            <li key={index} style={{ paddingLeft: '20px', backgroundColor: location.pathname === page.path ? '#424242' : '#1E1E1E' }}>
              <Link to={page.path}>
                <SiJavascript className="javascript-icon" /> {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileColumn;

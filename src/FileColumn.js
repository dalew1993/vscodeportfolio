import React from 'react';
import './FileColumn.css';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { SiJavascript, SiHtml5 } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';

const portfolioPages = [
  { path: '/home', name: 'Home.js' },
  { path: '/projects', name: 'Projects.js' },
  { path: '/about', name: 'About.js' },
  { path: '/cv', name: 'CV.js' },
  { path: '/contact', name: 'Contact.html' }
];

const FileColumn = ({ isOpen, toggleFolder }) => {  // Received isOpen and toggleFolder as props
  const location = useLocation();

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking on the file structure
  };

  return (
    <div className="fileColumn">
      <h2>Explorer</h2>
      <div className="folder">
        <h3 onClick={toggleFolder}>
          {isOpen ? <FiChevronDown /> : <FiChevronRight />} Portfolio
        </h3>
        {isOpen && (
          <ul>
            {portfolioPages.map((page, index) => (
              <li key={index} style={{ paddingLeft: '20px', backgroundColor: location.pathname === page.path ? '#424242' : '#1E1E1E' }}>
                <Link to={page.path} onClick={handleLinkClick}>
                  {page.path === '/contact' ? (
                    <SiHtml5 className="html-icon" />
                  ) : (
                    <SiJavascript className="javascript-icon" />
                  )}
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileColumn;

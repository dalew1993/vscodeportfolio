import React from 'react';
import { useLocation } from 'react-router-dom';
import { SiJavascript, SiHtml5 } from 'react-icons/si';
import './SmallHeader.css';

const pageTitles = {
  '/home': 'Home.js',
  '/projects': 'Projects.js',
  '/about': 'About.js',
  '/cv': 'CV.js',
  '/contact': 'Contact.html',
};

const SmallHeader = () => {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || '';
  const isNoFilesOpenPage = location.pathname === '/nofilesopen';

  return (
    <div className={`secondaryHeader ${isNoFilesOpenPage ? 'noFilesOpenHeader' : ''}`}>
      {!isNoFilesOpenPage && (
        <>
          {location.pathname === '/contact' ? (
            <SiHtml5 size="1em" className="smallheadericon2" />
          ) : (
            <SiJavascript size="1em" className="smallheadericon" />
          )}
        </>
      )}
      <span className="title">{pageTitle}</span>
      <div className="line"></div>
    </div>
  );
};

export default SmallHeader;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { SiJavascript } from 'react-icons/si';
import './SmallHeader.css';

const pageTitles = {
  '/home': 'Home',
  '/projects': 'Projects',
  '/about': 'About',
  '/cv': 'CV',
  '/contact': 'Contact',
};

const SmallHeader = () => {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] ? pageTitles[location.pathname] + '.js' : '';
  const isNoFilesOpenPage = location.pathname === '/nofilesopen';

  return (
    <div className={`secondaryHeader ${isNoFilesOpenPage ? 'noFilesOpenHeader' : ''}`}>
      {!isNoFilesOpenPage && <SiJavascript size="1em" className="smallheadericon" />}
      <span className="title">{pageTitle}</span>
      <div className="line"></div>
    </div>
  );
};

export default SmallHeader;

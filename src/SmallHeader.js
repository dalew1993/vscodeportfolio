import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SiJavascript, SiHtml5 } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import './SmallHeader.css';

const pageTitles = {
  '/home': 'Home.js',
  '/projects': 'Projects.js',
  '/about': 'About.js',
  '/cv': 'Cv.js',
  '/contact': 'Contact.html',
};

const SmallHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (location.pathname !== '/nofilesopen' && !tabs.includes(location.pathname) && pageTitles[location.pathname]) {
      setTabs([...tabs, location.pathname]);
    }
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const closeTab = (tabToClose) => {
    setTabs(tabs.filter(tab => tab !== tabToClose));
    if (tabToClose === location.pathname) {
      navigate('/nofilesopen');
    }
  };

  const onTabClick = (tabPath) => {
    navigate(tabPath);
  };

  return (
    <div className="secondaryHeader">
      {tabs.map(tab => (
        <div key={tab} className="tab" onClick={() => onTabClick(tab)}>
          <div className={`headerContent ${tab === activeTab ? 'activeTab' : ''}`}>
            {tab === '/contact' ? (
              <SiHtml5 size="1em" className="smallheadericon2" />
            ) : (
              <SiJavascript size="1em" className="smallheadericon" />
            )}
            <span className="title">{pageTitles[tab]}</span>
            <AiOutlineClose size="1em" className="closeIcon" onClick={(e) => {e.stopPropagation(); closeTab(tab);}} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallHeader;

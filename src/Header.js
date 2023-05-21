import React from 'react';
import './Header.css';
import { Minimize, CropSquare, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="leftSection">
        <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      </div>
      <div className="pageTitle">Portfolio - Dale Warburton</div>
      <div className="headerIcons">
        <Minimize className="iconm" />
        <CropSquare className="iconc" />
        <Link to="/nofilesopen" className="iconc2">
          {/* Update the path to match your "No Files Open" page route */}
          <Close className="iconc2" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

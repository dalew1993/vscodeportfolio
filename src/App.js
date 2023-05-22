import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SmallHeader from './SmallHeader';
import LeftColumn from './LeftColumn';
import FileColumn from './FileColumn';
import Routes from './Routes';
import './App.css';

function App() {
  const [isFileColumnOpen, setFileColumnOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // New state variable for handling the opened or closed state of the files

  const toggleFileColumn = () => {
    setFileColumnOpen(!isFileColumnOpen);
  };

  const toggleFolder = () => {  // New function for toggling the opened or closed state of the files
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <LeftColumn toggleFileColumn={toggleFileColumn} />
          {isFileColumnOpen && <FileColumn isFileColumnOpen={isFileColumnOpen} isOpen={isOpen} toggleFolder={toggleFolder} />}
          <div className="contentRight">
            <SmallHeader className="secondaryHeader" />
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

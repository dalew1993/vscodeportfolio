// App.js
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
  const toggleFileColumn = () => {
    setFileColumnOpen(!isFileColumnOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <LeftColumn toggleFileColumn={toggleFileColumn} />
          {isFileColumnOpen && <FileColumn />}
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

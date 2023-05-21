import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Cv from './Cv';
import Contact from './Contact';
import NoFilesOpen from './NoFilesOpen';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/nofilesopen" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} /> {/* Add this route */}
      <Route path="/about" element={<About />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/contact" element={<Contact />} />
      {/* other routes */}
      <Route path="/nofilesopen" element={<NoFilesOpen />} />
    </Routes>
  );
};

export default RoutesComponent;


import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Explorer from './pages/Explorer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <div className="static-overlay" />
        <div className="scanline" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;

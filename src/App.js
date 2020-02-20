import React from 'react';

import './App.css';
import Navbar from './components/Navbar/index.js';
import Directory from './pages/Directory.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Directory></Directory>
    </div>
  );
}

export default App;

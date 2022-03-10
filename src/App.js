import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path= '/' element= {<Landing />} />
              <Route path='/home' element = {<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

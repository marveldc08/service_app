import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path= '/' element= {<Landing />} />
              <Route path='/home' element = {<Home />} />
              <Route path='/signin' element = {<SignIn />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Story1 from './components/pages/Stories/Story1';
import Story2 from './components/pages/Stories/Story2';
import Story3 from './components/pages/Stories/Story3';
import Story4 from './components/pages/Stories/Story4';
import Story5 from './components/pages/Stories/Story5';
// import ReactDOM from 'react-dom/client'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/story1' element={<Story1 />} />
          <Route path='/story2' element={<Story2 />} />
          <Route path='/story3' element={<Story3 />} />
          <Route path='/story4' element={<Story4 />} />
          <Route path='/story5' element={<Story5 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

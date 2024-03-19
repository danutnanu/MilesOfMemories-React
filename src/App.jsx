import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Story from './components/pages/Story';
// import ReactDOM from 'react-dom/client'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/story' element={<Story />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

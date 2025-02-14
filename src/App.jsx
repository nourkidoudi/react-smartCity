import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Hotels from './Components/pages/Hotels';
import Restaurants from './Components/pages/Restaurants';
import Museums from './Components/pages/Museums';
import SignUp from './Components/pages/SignUp';
import Tours from './Components/pages/Tours';
import Transport from './Components/pages/Transport';
import Dashboard from './Components/pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/museums' element={<Museums />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/transport' element={<Transport />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

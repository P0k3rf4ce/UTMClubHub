import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './User Interface/Home';
import Explore from './User Interface/Explore';
import Calendar from './User Interface/Calendar';
import Search from './User Interface/Search';
import Settings from './User Interface/Settings';
import Account from './User Interface/Account';
import Navbar from './User Interface/Navbar'; // Import Navbar



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;


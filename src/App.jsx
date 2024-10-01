import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Photo Albums</h1>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<AlbumList />} />
          <Route path="/album/:id" element={<PhotoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

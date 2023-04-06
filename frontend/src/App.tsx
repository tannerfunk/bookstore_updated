import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PodcastsPage from './pages/PodcastsPage';
import MovieCollectionPage from './pages/MovieCollectionPage';
import Navigation from './components/Navigation';
import React from 'react';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/movie-collection" element={<MovieCollectionPage />} />
      </Routes>
    </Router>
  );
}


export default App;

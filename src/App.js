// App.js
import React from 'react';
import ResponsiveDrawer from './components/sidebar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header.js';
import MovieGridRedux from './components/Moviegridredux'; 
import SearchResults from "./components/SearchResults";
import MovieDetail from './components/MovieDetail'; // Import the MovieDetail component
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ResponsiveDrawer />
        <main style={{ marginLeft: "220px", marginTop: "34px", padding: "10px" }}>
          <Routes>
            <Route path="/" element={<MovieGridRedux category="popular" />} />
            <Route path="/action" element={<MovieGridRedux category="action" />} />
            <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
            <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
            <Route path="/drama" element={<MovieGridRedux category="drama" />} />
            <Route path="/horror" element={<MovieGridRedux category="horror" />} />
            <Route path="/fantasy" element={<MovieGridRedux category="fantasy" />} />
            <Route path="/romance" element={<MovieGridRedux category="romance" />} />
            <Route path="/thriller" element={<MovieGridRedux category="thriller" />} />
            <Route path="/science-fiction" element={<MovieGridRedux category="scienceFiction" />} />
            <Route path="/animation" element={<MovieGridRedux category="animation" />} />
            <Route path="/documentary" element={<MovieGridRedux category="documentary" />} />
            <Route path="/movie/:id" element={<MovieDetail />}/>
            <Route path="/movie/category/:category" element={<MovieGridRedux />} /> {/* Route for movie details */}
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

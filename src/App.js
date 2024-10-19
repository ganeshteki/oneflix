// App.js
import React from 'react';
import ResponsiveDrawer from './components/sidebar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header.js';
import MovieGridRedux from './components/Moviegridredux'; 
import SearchResults from "./components/SearchResults";
import MovieDetail from './components/MovieDetail'; // Import the MovieDetail component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ResponsiveDrawer />
        <main style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}>
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

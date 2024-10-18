// import logo from './logo.svg';
// import './App.css';
// import SearchAppBar from './components/header.js';
// import SidebarWithButton from './components/sidder.js';

// function App() {
//   return (
//     <div className="App">
      
//         <SearchAppBar/>
//         <SidebarWithButton/>
      
    
     

     
//      </div>
  
//   );
// }

// export default App;


// import React, { useState } from "react";
// import {
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
//   Box,
//   Toolbar,
// } from "@mui/material";
// import SearchAppBar from "./components/header.js";
// import SidebarWithButton from "./components/sidder.js";
// import MovieGrid from "./components/MovieGrid.js";
// const theme = createTheme({
//   palette: {
//     background:{
//     default:'black',
//   },
//     primary: {
//       main: "#2196f3",
//     },
//   },
// });

// function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ display: "flex",flexDirection:"column"}}>
//         <SearchAppBar handleDrawerToggle={handleDrawerToggle} />
//         <SidebarWithButton
//           mobileOpen={mobileOpen}
//           handleDrawerToggle={handleDrawerToggle}
//         />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Toolbar /> {/* This empty Toolbar acts as a spacer */}
//           <MovieGrid />
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default App;
// import React from "react";
// import SidebarWithButton from "./components/sidder";
// import Header from "./components/header";
// import MovieGridRedux from "./components/MovieGridRedux";
// function App() {
//   return (
//     <div>
//       <Header />
//       <SidebarWithButton />
//       <main style={{ marginLeft: "240px", marginTop: "64px" }}>
//         <MovieGridRedux/>
//       </main>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ResponsiveDrawer from './components/sidebar.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure path is correct
import Header from './components/Header'; // Ensure path is correct
import MovieGridRedux from './components/Moviegridredux'; 
import SearchResults from "./components/SearchResults";

// Ensure path is correct

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ResponsiveDrawer/>
        <main
          style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}
        >
          <Routes>
            <Route path="/" element={<MovieGridRedux category="popular" />} />
            <Route
              path="/action"
              element={<MovieGridRedux category="action" />}
            />
            <Route
              path="/adventure"
              element={<MovieGridRedux category="adventure" />}
            />
            <Route
              path="/comedy"
              element={<MovieGridRedux category="comedy" />}
            />
             <Route path="/drama"
              element={<MovieGridRedux category="drama" />}
               />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          
          
        </main>
      </div>
    </Router>
  );
}

export default App;
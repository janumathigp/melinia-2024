//    import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Preloader from "./Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Board from "./Components/Board/Board";
import MainDescription from './Components/Events/MainDescription';
import Footer from "./Components/Footer";



import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Developers from './Components/Developers/Developers';
// import Achievements from "./Components/Achievements/Achievements";


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar style={{display:'flex', justifyContent:'end'}} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/events/:id" element={<MainDescription />} />
   
          <Route path="/developers" element={<Developers />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;

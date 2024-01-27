//    import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Board from "./components/Board/Board";
import MainDescription from './components/Events/MainDescription';
import Footer from "./components/Footer";



import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Developers from './components/Developers/Developers';
// import Achievements from "./components/Achievements/Achievements";


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

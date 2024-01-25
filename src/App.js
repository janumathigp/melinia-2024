//    import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Preloader from "../src/Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Board from "./Components/Board/Board";
import Technical from "./Components/Technical/Technical";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import Footer from "./Components/Footer";



import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route path="/technical" element={<Technical />} />
          <Route path="/nontechnical" element={<Nontechnical />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;

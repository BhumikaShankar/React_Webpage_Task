import "./App.css";
import React, {useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideMenu } from "./components/SideMenu";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from './components/Contact';
import { Profile } from './components/Profile';
import { Search } from './components/Search';
import { Back } from './components/Back';

const App = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <>
      <Router>
      <div>
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className={`content ${isMenuOpen ? "shift" : ""}`}>
          <button className="menu-btn" onClick={toggleMenu}>
            <i className={`bi bi-list${isMenuOpen ? "-x" : ""}`}></i>
          </button>
        <Routes>
          <Route path="/search" element={<Search/>}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/back" element={<Back/>}>
          </Route>
        </Routes>
        </div>
      </div>
      </Router>
    </>
  );
};

export default App;
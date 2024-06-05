import React from "react";
import "./App.css";
import BookSearch from "./components/bookSearch/bookSearch";
import BookShelf from "./components/bookShelf/bookShelf";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container d-flex justify-content-between align-items-center">
            <h2 className="headingEl">Book Search App</h2>
            <div id="navbarNav">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item mr-2">
                  <Link className="nav-link search" to="/">
                    Search
                  </Link>
                </li>
                <li className="nav-item ml-auto">
                  <Link
                    className="btn"
                    to="/bookshelf"
                    
                  >
                    My Bookshelf
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" exact element={<BookSearch />} />
            <Route path="/bookshelf" element={<BookShelf />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

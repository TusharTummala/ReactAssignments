import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Assignment1 from './components/assignment1';
import Assignment2 from './components/assignment2';
import Assignment3 from './components/assignment3/assignment3';
import ParentComponent from './components/assignment3/assignment3(1)';
import Assignment4 from './components/assignment4/assignment4';
import Assignment5 from './components/assignment5';
import Assignment6 from './components/assignment6';
import Assignment7 from './components/assignment7.1';
import Assignment8 from './components/assignment8';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/assignment1">
                <button className="btn btn-primary">Assignment 1</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment2">
                <button className="btn btn-primary">Assignment 2</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment3">
                <button className="btn btn-primary">Assignment 3</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment3(1)">
                <button className="btn btn-primary">Assignment 3.1</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment4">
                <button className="btn btn-primary">Assignment 4</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment5">
                <button className="btn btn-primary">Assignment 5</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment6">
                <button className="btn btn-primary">Assignment 6</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment7">
                <button className="btn btn-primary">Assignment 7</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignment8">
                <button className="btn btn-primary">Assignment 8</button>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/assignment1" element={<Assignment1 />} />
          <Route path="/assignment2" element={<Assignment2 />} />
          <Route path="/assignment3" element={<Assignment3 />} />
          <Route path="/assignment3(1)" element={<ParentComponent />} />
          <Route path="/assignment4" element={<Assignment4 />} />
          <Route path="/assignment5" element={<Assignment5 />} />
          <Route path="/assignment6" element={<Assignment6 />} />
          <Route path="/assignment7" element={<Assignment7 />} />
          <Route path="/assignment8" element={<Assignment8 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

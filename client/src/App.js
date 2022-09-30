import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js"
import SpeciesInfo from "./components/dataList/SpeciesInfo.js";
import SightingsInfo from './components/dataList/SightingsInfo';
import IndividualsInfo from './components/dataList/IndividualsInfo';

function App() {
  return (
    <>
      <div className="NavBar">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SpeciesInfo' element={<SpeciesInfo />}></Route>
            <Route path='/SightingsInfo' element={<SightingsInfo />}></Route>
            <Route path='/IndividualsInfo' element={<IndividualsInfo />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Origination from './components/Origination'
import Home from './components/Home'
import Outlook from './components/Outlook'
import Nav from './components/Nav';
import RecipeDetail from './components/RecipeDetail'
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/origin' element={<Origination/>}/>
        <Route path = '/outlook' element={<Outlook/>}/>
        <Route path = '/recipe/:id' element={<RecipeDetail />}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

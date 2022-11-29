import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import React, {useState, useEffect}from 'react';
import {supabase} from "./components/connection/Connection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/index'
import Products from './components/pages/Products/index'

function App() {
  return (
      <Router>
        <div className='App'>
          <Sidebar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produtos' element={<Products/>}/>            
          </Routes>
          </Sidebar>
        </div>
      </Router>

  );
}

export default App

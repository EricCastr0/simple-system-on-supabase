import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import React, {useState, useEffect}from 'react';
import {supabase} from "./components/connection/Connection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/index'
import Products from './components/pages/Products/index'

function App() {

  const [produtos, setProdutos]= useState([])
  console.log(produtos);

  useEffect(() => {
    buscaProdutos()
  }, [])

  async function buscaProdutos(){
    const {data} = await supabase
        .from('Products')
        .select('*')
        setProdutos(data)

}


  return (
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/produtos' element={<Products/>}/>            
        </Routes>
        <div>
          <div className='App'>
            <Sidebar/>
          </div>
        </div>
      </Router>

  );
}

export default App

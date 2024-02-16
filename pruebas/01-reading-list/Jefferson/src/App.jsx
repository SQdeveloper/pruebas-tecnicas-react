import { useState } from 'react';
import Header from './components/Header/Header'
import Home from './Pages/Home/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageBook from './Pages/PageBook/PageBook';

function App() {  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:id' element={<PageBook/>}/>
      </Routes>        
    </BrowserRouter>
    </>
  )
}

export default App

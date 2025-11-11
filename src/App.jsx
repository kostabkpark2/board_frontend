import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Save from './pages/Save'
import List from './pages/List'
import Header from './components/Header'

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/save" element={<Save />}></Route>
          <Route path="/list" element={<List />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

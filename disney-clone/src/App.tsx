import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="*" element={
            <div className='error'>
              <h2>404 Page not found</h2>
            </div>
          }
          />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

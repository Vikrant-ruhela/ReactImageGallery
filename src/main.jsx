import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CardDetail from './Components/CardDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Link to='/'>
      <h1 className='text-5xl font-medium text-center p-8'>React Image Gallery</h1>
    </Link>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/cardDetails/:id' element={<CardDetail />} />
    </Routes>
  </BrowserRouter>
)

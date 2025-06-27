import React from 'react'
import Home from './pages/Home'
import Gis from './pages/Gis'
import { Route, Routes, BrowserRoutes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRoutes>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gisprojects' element={<Gis/>}/>
              </Routes>
      </BrowserRoutes>
    </div>
  )
}

export default App
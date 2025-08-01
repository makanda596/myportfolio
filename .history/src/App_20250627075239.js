import React from 'react'
import Home from './pages/Home'
import Gis from './pages/Gis'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gisprojects' element={<Gis/>}/>
              </Routes>
    </div>
  )
}

export default App
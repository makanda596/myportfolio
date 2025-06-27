import React from 'react'
import Home from './pages/Home'
import Gis from './pages/Gis'
import { BrowserRouter as Route, Routes ,Router} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gisprojects' element={<Gis/>}/>
              </Routes>
      </Router>
    </div>
  )
}

export default App
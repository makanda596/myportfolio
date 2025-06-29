import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gis from './pages/Gis'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gisprojects' element={<Gis />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

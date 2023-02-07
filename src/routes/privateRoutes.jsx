import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../components/About/About'

const PrivateRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default PrivateRoutes
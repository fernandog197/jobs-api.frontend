import { Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/Login/Login'
import About from '../components/About/About'

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/about' element={<About />} />

            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default PublicRoutes
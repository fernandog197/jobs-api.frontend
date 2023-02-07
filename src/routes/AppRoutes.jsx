import { Routes, Route, Navigate } from 'react-router-dom'

import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'

const AppRoutes = ({ userState }) => {

    return (
        <Routes>
            {
                userState.name
                ? <Route path='/*' element={<PrivateRoutes />} />
                : <Route path='/*' element={<PublicRoutes />} />
            }

            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default AppRoutes
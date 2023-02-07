import { useSelector } from 'react-redux'

import Header from './components/Header/Header'
import MainTitle from './components/MainTitle/MainTitle'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
    const userState = useSelector((state) => state.user)

    return (
        <div className="App">
            <Header name={userState.name} />
            <MainTitle />
            <AppRoutes userState={userState} />
            <Footer />
        </div>
    )
}

export default App

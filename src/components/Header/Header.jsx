import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { AiOutlineAppstore }  from 'react-icons/ai'

import Switch from '../Switch/Switch'

import { logoutUser } from '../../store/reducers/user'

import './header.css'

const Header = ({ name }) => {
    /*===========Change Background Header===========*/
    window.addEventListener("scroll", () => {
        const header = document.querySelector('.header')

        if(scrollY>=80) {
            header.classList.add('scroll-header')
        }else {
            header.classList.remove('scroll-header')
        }
    })

    /*===========Toggle Menu===========*/
    const [showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.user)

    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    const toUpperCase = (name) => {
        return `${name[0].toUpperCase()}${name.slice(1)}`
    }

    return (
        <header className="header">
            <nav className="nav container">
                <div className='nav__logo-container'>
                    <Link to='/'>
                        <h3>{userState.name?toUpperCase(userState.name):'Miguel Garcia'}</h3>
                    </Link>
                    <Switch />
                </div>

                <div className={showMenu?'nav__menu show-menu':'nav__menu'}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to='/' onClick={() => setActiveNav('home')} className={activeNav==='home'?'nav__link active__link':'nav__link'}>
                                {userState.name? 'Home': 'Login'}
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to='/about' onClick={() => setActiveNav('about')} className={activeNav==='about'?'nav__link active__link':'nav__link'}>
                                About
                            </Link>
                        </li>

                        {
                            userState.name && (
                                <li>
                                    <button className='header__button button button--flex' onClick={handleClick}>Logout</button>
                                </li>
                            )
                        }
                    </ul>
                    <div className="nav__toggle nav__close" onClick={() => setShowMenu(!showMenu)}>
                        <AiOutlineAppstore />
                    </div>
                </div>
                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineAppstore />
                </div>
            </nav>
        </header>
    )
}

export default Header
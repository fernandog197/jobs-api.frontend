import React from 'react'
import { Link } from 'react-router-dom'

import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import './footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Miguel Garcia</h1>

                <ul className="footer__list">
                    <li>
                        <Link className='footer__link' to='/about'>
                            About
                        </Link>
                    </li>

                    <li>
                        <a href="https://miguelgarcia-portfolio-miguedev.vercel.app/" target='_blank' className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/fernandog197" className="footer__social-link" target='_blank'>
                        <BsGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/miguelgarcia-dev/" className="footer__social-link" target='_blank'>
                        <BsLinkedin />
                    </a>

                    <a href="https://twitter.com/MiguelF33016837" className="footer__social-link" target='_blank'>
                        <BsTwitter />
                    </a>
                </div>

                <span className="footer__copy">&#169; Miguel Garcia. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer
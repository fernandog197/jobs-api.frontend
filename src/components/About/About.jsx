import { useEffect } from 'react'

import { MdTaskAlt } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import './about.css'

const About = () => {
    useEffect(() => {
        scroll(0, 0)
    }, [])

    return (
        <div className='about__container container section'>
            <h1>About</h1>
            <p>This project belongs to the portfolio of <strong>Miguel Garcia</strong>. You can visit it clicking <a href="" target='_blank'>here</a>.</p>
            <br />
            <h2>About this project</h2>
            <p>
                This project was built with the primary goal of creating a valid user registration and login system. This allows only users who are logged into the app to access the functional parts of the application. <br /> <br />
                The project is composed of two distinct parts: <br /><br />
                <ul className='about__list'>
                    <li>
                        - The backend: this was written in Express and it is responsible for generating the user accounts and verifying their login information. It also verifies their identity using JWT security. <br />
                        Additionally, it allows new users to generate a profile where you can fill in the name of the company, the position you would occupy, and the current status of your application (pending, interview, and declined).
                    </li>
                    <br />
                    <li>
                        - The frontend: this was written in React and it is responsible for displaying the login screen to the user. In addition, it is used for adding new users and making changes to the existing user profile. <br />
                        The routes are managed using react-router-dom, which allows the user to restrict access to certain pages when the user is logged out. <br />
                        Redux was used to handle the state of login and logout, and all of the user's information is then accessible to the rest of the application.
                    </li>
                </ul>
                <br />
                It should be noted that the backend returns the user's username and token (JWT) after a successful registration.
                These are necessary to access the private routes on the frontend, as well as to process any application requests sent back to the backend.
            </p>
            <br />
            <p>
                Below is a specific detail of the technologies used: <br /> <br />
            </p>
            <h3>BackEnd:</h3>
            <ul className='about__list'>
                <li><MdTaskAlt /> NodeJs</li>
                <li><MdTaskAlt /> ExpressJs</li>
                <li><MdTaskAlt /> MongoDB Atlas</li>
                <li><MdTaskAlt /> Mongoose (ORM)</li>
                <li><MdTaskAlt /> JWT</li>
            </ul>
            <br /><br />
            <h3>FrontEnd:</h3>
            <ul className='about__list'>
                <li><MdTaskAlt /> ReactJs</li>
                <li><MdTaskAlt /> Redux toolkit</li>
            </ul>
            <br />
            <p>In addition, the following libraries were used:</p>
            <ul className='about__list'>
                <li><MdTaskAlt /> axios</li>
                <li><MdTaskAlt /> react-icons</li>
                <li><MdTaskAlt /> react-router-dom</li>
            </ul><br /><br />
            <p>You can access the project repositories by following the links below:</p><br /><br />
            <div className='about__repositories'>
                <div className='about__repositories-repository'>
                    <a href="https://github.com/fernandog197/jobs-api.backend" target='_blank'><p>jobs-api.backend</p></a>
                    <BsGithub size='1.5rem' />
                </div>
                <div className='about__repositories-repository'>
                    <a href="https://github.com/fernandog197/jobs-api.frontend" target='_blank'><p>jobs-api.frontend</p></a>
                    <BsGithub size='1.5rem' />
                </div>
            </div><br /><br />
            <h2>About the developer</h2>
            <p>
                My name is Miguel Fernando Garcia, Full Stack Developer and passionate about the IT world.
                I am excited to learn new things as much as to apply them in a project.
                If you want to know more about me and/or my work, you are welcome to visit my portfolio or any of my social networks that I attach below (just click on the link of your interest). <br /> <br />
                Thank you very much for your visit! :D
            </p>
            <br />
            <br />
            <div className='about__contact'>
                <a href="https://miguelgarcia-portfolio.netlify.app/" target='_blank' className='about__contact-link'>
                    <BsBriefcaseFill className='about__contact-icon' />
                </a>
                <a href="https://github.com/fernandog197" target='_blank' className='about__contact-link'>
                    <BsGithub className='about__contact-icon' />
                </a>
                <a href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" target='_blank' className='about__contact-link'>
                    <BsLinkedin className='about__contact-icon' />
                </a>
                <a href="https://twitter.com/MiguelF33016837" target='_blank' className='about__contact-link'>
                    <BsTwitter className='about__contact-icon' />
                </a>
                <a href="mailto:bluewavesalta@gmail.com" target='_blank' className='about__contact-link'>
                    <MdEmail className='about__contact-icon' />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}

export default About
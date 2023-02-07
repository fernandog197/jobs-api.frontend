import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { loginUser } from '../../store/reducers/user'

import { authLogin, authRegister } from '../../constants/authUrls'

import './login.css'


const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!form.name.trim()) {
        errors.name = 'The "Name" field is required'
    }else if(!regexName.test(form.name.trim())) {
        errors.name = 'The "Name" field only receives letters and white spaces'
    }

    if(!form.email.trim()) {
        errors.email = 'The "Email" field is required'
    }else if(!regexEmail.test(form.email.trim())) {
        errors.email = 'The "Email" field is not correct. Please, write a valid Email'
    }

    if(!form.password.trim()) {
        errors.password = 'The ""Password" field is required'
    }else if(form.password.length<6) {
        errors.password = 'The "Password" field must have 6 characters at least.'
    }

    return errors
}

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, fetchUser] = useFetch()

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [register, setRegister] = useState(false)

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validationsForm(input))
    }

    const handleBlur = () => {
        setErrors(validationsForm(input))
    }

    const handleClick = () => {
        setRegister(!register)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validationsForm(input))

        let response = {}

        try {
            if(register && Object.keys(errors).length === 0) {
                response = await fetchUser({
                    url: authRegister,
                    method: 'post',
                    body: input
                })
            }

            if(!register){
                let loginErrors = errors
                delete loginErrors.name

                if(Object.keys(loginErrors).length === 0){
                    response = await fetchUser({
                        url: authLogin,
                        method: 'post',
                        body: input
                    })
                }
            }

            dispatch(loginUser(response.data))
        } catch (err) {
            console.log(err)            
        }
    }

    return (
        <div className='login__container container'>
            <h2>{register? 'Register': 'Login'}</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                {
                    register && (
                        <div className='login__form-inputs'>
                            <label htmlFor="name" className='login__form-label'>Nickname</label>
                            <input 
                                type="text"
                                name='name'
                                value={input.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.name?'login__form-name border-red':'login__form-name'}
                                placeholder='Your nickname...'
                            />
                            {
                                errors.name && <p className='login__form-errors font-red'>{errors.name}</p>
                            }
                        </div>
                    )
                }
                <div className='login__form-inputs'>
                    <label htmlFor="email" className='login__form-label'>Email</label>
                    <input 
                        type="email"
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email?'login__form-email border-red':'login__form-email'}
                        placeholder='Your email...'
                    />
                    {
                        errors.email && <p className='login__form-errors font-red'>{errors.email}</p>
                    }
                </div>
                <div className='login__form-inputs'>
                    <label htmlFor="password" className='login__form-label'>Password</label>
                    <input 
                        type="password"
                        name='password'
                        value={input.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password?'login__form-password border-red':'login__form-password'}
                        placeholder='Your password...' 
                    />
                    {
                        errors.password && <p className='login__form-errors font-red'>{errors.password}</p>
                    }
                </div>
                <div className='login__form-inputs'>
                    <button type='submit' className="login__form-button button button--flex">{register?'Register':'Login'}</button>
                    <p className='login__form-register' onClick={handleClick}>
                        {register?'Have an account? Login!':'Dont have an account? Register!'}
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
import { useState } from 'react'
import { useSelector } from 'react-redux'

import useAuthFetch from '../../hooks/useAuthFetch'

import { jobsGetAllAndCreate } from '../../constants/jobUrls'

import { RxDoubleArrowDown } from 'react-icons/rx'
import { RxDoubleArrowUp } from 'react-icons/rx'

import './jobsform.css'

const JobsForm = ({ setUpdate, update }) => {
    const [display, setDisplay] = useState(false)
    const [input, setinput] = useState({
        company: '',
        position:'',
        status: 'pending'
    })
    const [state, fetchJob] = useAuthFetch()

    const userState = useSelector((state) => state.user)

    const handleClick = () => {
        setinput({
            company: '',
            position:'',
            status: 'pending'
        })
        setDisplay(!display)
    }

    const handleChange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(input.company==='' || input.position==='') {
            setDisplay(false)
            return
        }

        await fetchJob({
            url: jobsGetAllAndCreate,
            method: 'post',
            body: input,
            token: userState.token
        })
        setinput({
            company: '',
            position: '',
            status: 'pending'
        })
        setDisplay(false)
        setUpdate(!update)
    }
    
    return (
        <div className='jobsform__container container'>
            <div className="jobsform__menu" onClick={handleClick}>
                <h3 className="jobsform__menu-title">Create a Job</h3>
                {
                    display
                    ? <RxDoubleArrowUp className='jobsform__menu-icon jello-vertical' />
                    : <RxDoubleArrowDown className='jobsform__menu-icon jello-vertical' />
                }
            </div>

            {
                display && (
                    <form className="jobsform__form" onSubmit={handleSubmit}>
                        <label className='jobsform__form-label' htmlFor="company">Company</label>
                        <input
                            className='jobsform__form-inputs' 
                            type="text"
                            name='company'
                            value={input.company}
                            maxLength='50'
                            minLength='5'
                            onChange={handleChange}
                        />
                        <p className={input.company.length<5 || input.company.length>40?'jobsform__form-length font-red':'jobsform__form-length'}>{`${input.company.length}/50`}</p>

                        <label className='jobsform__form-label' htmlFor="position">Position</label>
                        <input
                            className='jobsform__form-inputs'
                            type="text"
                            name='position'
                            value={input.position}
                            maxLength='100'
                            minLength='5'
                            onChange={handleChange}
                        />  
                        <p className={input.position.length<5 || input.position.length>90?'jobsform__form-length font-red':'jobsform__form-length'}>{`${input.position.length}/100`}</p>

                        <label className='jobsform__form-label' htmlFor="status">Status</label>
                        <select className='jobsform__form-select' name="status" onChange={handleChange}>
                            <option className='jobsform__form-option' value="pending">Pending</option>
                            <option className='jobsform__form-option' value="interview">Interview</option>
                            <option className='jobsform__form-option' value="declined">Declined</option>
                        </select>

                        <button type='submit' className='jobsform__form-button button button--flex'>Create job</button>
                    </form>
                )
            }
        </div>
    )
}

export default JobsForm
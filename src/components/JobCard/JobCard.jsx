import { useState } from 'react'
import { useSelector } from 'react-redux'

import useAuthFetch from '../../hooks/useAuthFetch'

import { jobsGetUpdateDelete } from '../../constants/jobUrls'

import { AiOutlineCloseCircle, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

import './jobcard.css'

const JobCard = ({ id, company, position, status, update, setUpdate }) => {
    const [modify, setModify] = useState(false)
    const [state, fetchJob] = useAuthFetch()
    const userState = useSelector((state) => state.user)
    const [input, setInput] = useState({
        company: company,
        position: position,
        status: status
    })

    const handleClick = () => {
        setModify(!modify)
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = async () => {
        await fetchJob({
            url: jobsGetUpdateDelete(id),
            method: 'delete',
            token: userState.token
        })
        setUpdate(!update)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(input.company === company && input.position === position && input.status === status) {
            setModify(false)
            return
        }

        await fetchJob({
            url: jobsGetUpdateDelete(id),
            method: 'patch',
            body: input,
            token: userState.token
        })
        setUpdate(!update)
        setModify(false)
    }

    return (
        <div className='jobcard__container'>
            <div className='jobcard__header'>
                <h2 className='jobcard__header-title'>{company}</h2>
                <AiOutlineCloseCircle className='jobcard__header-icon' onClick={handleDelete} />
            </div>
            <p className='jobcard__position'>{position}</p>
            <br />
            <h3 className={`jobcard__status tracking-in-expand ${status === 'pending'?'font-yellow':status === 'interview'?'font-green':'font-red'}`}>
                {status}
            </h3>
            <br />
            <div className='jobcard__footer' onClick={handleClick}>
                <p className='jobcard__footer-text'>{modify?'Close':'Update'}</p>
                {
                    modify
                    ? <AiOutlineArrowUp className='jobcard__footer-icon-up' />
                    : <AiOutlineArrowDown className='jobcard__footer-icon-down' />
                }
            </div>
            {
                modify && (
                    <form className="jobcard__form" onSubmit={handleSubmit}>
                        <label className='jobcard__form-label' htmlFor="company">Company</label>
                        <input
                            className='jobcard__form-inputs' 
                            type="text"
                            name='company'
                            value={input.company}
                            maxLength='50'
                            minLength='5'
                            onChange={handleChange}
                        />
                        <p className={input.company.length<5 || input.company.length>40?'jobcard__form-length font-red':'jobcard__form-length'}>{`${input.company.length}/50`}</p>

                        <label className='jobcard__form-label' htmlFor="position">Position</label>
                        <input
                            className='jobcard__form-inputs'
                            type="text"
                            name='position'
                            value={input.position}
                            maxLength='100'
                            minLength='5'
                            onChange={handleChange}
                        />  
                        <p className={input.position.length<5 || input.position.length>90?'jobcard__form-length font-red':'jobcard__form-length'}>{`${input.position.length}/100`}</p>

                        <label className='jobcard__form-label' htmlFor="status">Status</label>
                        <select className='jobcard__form-select' name="status" onChange={handleChange}>
                            <option disabled selected value> -- select an option -- </option>
                            <option className='jobcard__form-option' value="pending">Pending</option>
                            <option className='jobcard__form-option' value="interview">Interview</option>
                            <option className='jobcard__form-option' value="declined">Declined</option>
                        </select>

                        <button type='submit' className='jobcard__form-button button button--flex'>Update job</button>
                    </form>
                )
            }
        </div>
    )
}

export default JobCard
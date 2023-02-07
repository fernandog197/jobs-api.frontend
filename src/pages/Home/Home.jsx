import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useAuthFetch from '../../hooks/useAuthFetch'

import { jobsGetAllAndCreate } from '../../constants/jobUrls'

import JobsGrid from '../../components/JobsGrid/JobsGrid'
import JobsForm from '../../components/JobsForm/JobsForm'

import './home.css'

const Home = () => {
    const userState = useSelector((state) => state.user)
    const [state, fetchJobs] = useAuthFetch()
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const getJobs = async () => {
            await fetchJobs({
                url: jobsGetAllAndCreate,
                method: 'get',
                token: userState.token
            })
        }
        setTimeout(() => {
            getJobs()
        }, 150)
    }, [update])

    return (
        <div className='home__container container section'>
            <JobsForm
                setUpdate={setUpdate}
                update={update}
            />
            {
                state.data && 
                <JobsGrid 
                    state={state.data}
                    setUpdate={setUpdate}
                    update={update} 
                />
            }
        </div>
    )
}

export default Home
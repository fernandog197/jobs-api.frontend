import JobCard from '../JobCard/JobCard'

import './jobsgrid.css'

const JobsGrid = ({ state, setUpdate, update }) => {
    
    return (
        <div className='jobsgrid__container container section'>
            {
                state && state.data.jobs.map((job) => (
                    <JobCard 
                        id={job._id}
                        key={job._id}
                        company={job.company}
                        position={job.position}
                        status={job.status}
                        update={update}
                        setUpdate={setUpdate}
                    />
                ))
            }
        </div>
    )
}

export default JobsGrid
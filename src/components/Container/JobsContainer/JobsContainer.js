import {useEffect, useState} from 'react';
import './JobsContainer.scss';
import JobCard from '../../CardJob/CardJob';

const JobsContainer = () => {
    const [jobs, setJobs] = useState([]);

    const getJobs = () => {
        fetch('jobs.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            console.log("fetched: ", response)
            return response.json()
        })
        .then((myJson) => {
            console.log("myjson: ", myJson)
            setJobs(myJson)
        })
    }
    useEffect(() => {
        getJobs()
    }, [])
    return (
        <main>
            <div className="jobs__container">
                <div className="jobs">
                {
                    jobs && jobs.map(job => {
                        return <JobCard {...job}/>
                    })
                }               
                </div>
            </div>
        </main>
    )
}

export default JobsContainer
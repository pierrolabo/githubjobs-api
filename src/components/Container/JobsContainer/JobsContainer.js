import {useEffect, useState} from 'react';
import './JobsContainer.scss';
import JobCard from '../../CardJob/CardJob';
import CardJobSkeleton from '../../CardJob/CardJobSkeleton';

const JobsContainer = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const getJobs = () => {
        setIsLoading(true)
        fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json', {
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
            setIsLoading(false)
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
                        isLoading && [1,2,3,4,5,6,7,8].map(item => {
                            return <CardJobSkeleton />
                        })
                    }
                {
                    jobs && jobs.map(job => {
                        return <JobCard {...job} key={job.id}/>
                    })
                }               
                </div>
            </div>
        </main>
    )
}

export default JobsContainer
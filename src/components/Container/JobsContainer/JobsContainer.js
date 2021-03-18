import {useEffect, useState, useContext} from 'react';
import {HookFilterContext} from '../../../hooks/HookFilter/HookFilter';
import './JobsContainer.scss';
import JobCard from '../../CardJob/CardJob';
import CardJobSkeleton from '../../CardJob/CardJobSkeleton';
import {URL_API} from '../../../constants/Constants';
const JobsContainer = () => {
    const [location, fullTime, setLocation, setFullTime, filterBy, setFilterBy, doSearch, jobs, setJobs,isLoading, setIsLoading] = useContext(HookFilterContext)
    const [index, setIndex] = useState(0)
    const [indexedJobs, setIndexedJobs] = useState()
    const getJobs = () => {
        setIsLoading(true)
        fetch(URL_API, {
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
    const increaseIndex = () => {
        console.log("index: ", index, "index after: ", index +12)
        if(index === 36) {
            //Load page 2
            console.log("need a page 2")
        } else {
            setIndex(index + 12)

        }
    }
    useEffect(() => {
        getJobs()
    }, [])
    useEffect(() => {
            if(jobs) {
                if(!indexedJobs) {
                    setIndexedJobs(jobs.slice(index, index + 12))
                    
                } else {
                    const newArr  = [...indexedJobs, ...jobs.slice(index, index + 12)];
                    setIndexedJobs(newArr)

                }
            }
    }, [index, jobs])
    return (
        <main>
            <div className="jobs__container">
                <div className="jobs">
                    {
                        isLoading && Array(12).fill(0).map((item, index) => {
                            return <CardJobSkeleton key={index}/>
                        })
                    }
                {
                    indexedJobs && indexedJobs.map((job, index) => {
                        return <JobCard {...job} key={job.id}/>
                    })
                }          
            </div>
                <div className="jobs__loadMoreButton" style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <button onClick={increaseIndex}>Load More</button>
                    </div>     
                </div>
        </main>
    )
}

export default JobsContainer
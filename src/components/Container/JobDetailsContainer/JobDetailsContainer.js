import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {JobsContext, DispatchContext} from '../../../hooks/JobsContext/JobsContext';
import {URL_API, ENV} from '../../../constants/Constants';
import {ACTIONS} from '../../../constants/JobAction';

import JobDetails from '../../JobDetails/JobDetails';

import './JobDetailsContainer.scss';

const JobDetailsContainer = () => {
    const {state} = useContext(JobsContext);
    const {dispatch} = useContext(DispatchContext)
    let {id} = useParams()
    const [job, setJob] = useState({})
    const [loading, isLoading] = useState(false)
    const {jobs} = state
    //console.log(jobs, job)

    /*
    *   If jobs from state is empty
    *   fetch data from json if dev mode or fetch api for single position
    * */
    useEffect(async () => {
        if(jobs.length === 0) {
            if(ENV === 'DEV') {
                dispatch({
                    type: ACTIONS.DO_SEARCH, payload: {...state}
                })
            } else {
                //  If we're not in dev no mode, there no reason jobs get updated
                const response = await fetchJobById(id)
                setJob(response)
            }
        } 
    }, [])
   useEffect(() => {
        setJob(...jobs.filter(job => job.id === id))

    }, [jobs])

    const fetchJobById = async (id) => {
        const URL = `https://cors.bridged.cc/https://jobs.github.com/positions/${id}.json`;
        console.log("fetching: ", URL)
        const response = await fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return await response.json()
    }
    console.log(job)
    return (
        <>
        {
            job && (<JobDetails {...job}/>)
        }
        </>

    )
}

export default JobDetailsContainer;
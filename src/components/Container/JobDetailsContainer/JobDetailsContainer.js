import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {JobsContext, DispatchContext} from '../../../hooks/JobsContext/JobsContext';
import {ENV} from '../../../constants/Constants';
import {ACTIONS} from '../../../constants/JobAction';

import Loader from "react-loader-spinner";
import JobDetails from '../../JobDetails/JobDetails';
import './JobDetailsContainer.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const JobDetailsContainer = () => {
    const {state} = useContext(JobsContext);
    const {dispatch} = useContext(DispatchContext)
    const [isLoading, setIsLoading] = useState(false)
    let {id} = useParams()
    const [job, setJob] = useState({})
    const {jobs} = state
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
        setIsLoading(true)
        const response = await fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const res = await response.json()
        setIsLoading(false)
        return res;
    }
    return (
        <>
        {
            isLoading &&  <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', marginTop: '20%'}}>
                <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={50}
            timeout={3000} //3 secs
          />
            </div>
        }
        {
            job && (<JobDetails {...job}/>)
        }
        </>

    )
}

export default JobDetailsContainer;
import React, {useEffect, useContext} from 'react';
import {JobsContext, DispatchContext} from '../../../hooks/JobsContext/JobsContext';
import {ACTIONS} from '../../../constants/JobAction';

import JobCard from '../../CardJob/CardJob';
import CardJobSkeleton from '../../CardJob/CardJobSkeleton';
import './JobsContainer.scss';
const JobsContainer = () => {
    const {dispatch} = useContext(DispatchContext)
    const {state} = useContext(JobsContext);
    const {jobs, indexedJobs, isLoading, isLoadingNextPage} = state;
    const getJobs = () => {
        dispatch({type: ACTIONS.DO_SEARCH, payload: {...state}})
        
    }
    const loadMore = () => {
        dispatch({type: ACTIONS.LOAD_MORE, payload: {...state}})
    }
    useEffect(() => {
        if(jobs.length === 0) {
            getJobs()
        }
    }, [])
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
                    indexedJobs && indexedJobs.map((job) => {
                        return <JobCard {...job} key={job.id}/>
                    })
                }          
                {
                    isLoadingNextPage && Array(12).fill(0).map((item, index) => {
                        return <CardJobSkeleton key={index}/>
                    })
                }
            </div>
            {
                !isLoadingNextPage && !isLoading && jobs.length > indexedJobs.length && (<div className="jobs__loadMoreButton" style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <button className="jobs--searchButton" onClick={loadMore}>Load More</button>
                </div> )
            }
            </div>     
               
        </main>
    )
}

export default React.memo(JobsContainer)
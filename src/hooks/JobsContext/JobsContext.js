import {createContext, useCallback} from "react";
import { useImmerReducer } from 'use-immer';
import {uniq} from 'lodash';
import {ACTIONS} from '../../constants/JobAction';
import {URL_API, ENV} from '../../constants/Constants';

const jobsReducer = (jobs, action) => {
    switch(action.type) {
        case ACTIONS.SET_LOCATION:
            jobs.location = action.payload.location
            return;
        case ACTIONS.TOGGLE_FULLTIME:
            jobs.fullTime = !jobs.fullTime
            return;
        case ACTIONS.SET_FILTER_BY:
            jobs.filterBy = action.payload.filter_by
            return;
        case ACTIONS.IS_LOADING:
            jobs.isLoading = action.payload.isLoading;
            return;
        case ACTIONS.IS_LOADING_NEXT_PAGE:
            jobs.isLoadingNextPage = action.payload.isLoadingNextPage;
            return;       
        case ACTIONS.SET_LAST_SEARCH:
            jobs.lastSearch = action.payload.lastSearch;
            return
        case ACTIONS.SET_JOBS:
            const newJobs = action.payload.jobs;
            jobs.jobs = newJobs;
            jobs.indexedJobs = newJobs.length >= 12 ? newJobs.slice(0, 12) : newJobs;   
            return;
        case ACTIONS.SET_INDEXED_JOBS:
            jobs.indexedJobs = action.payload.indexedJobs;
            jobs.jobIndex = action.payload.jobIndex; 
            return;
        case ACTIONS.SET_INDEXED_JOBS_NEXT_PAGE:
            jobs.jobs = action.payload.jobs;
            jobs.indexedJobs = action.payload.indexedJobs;    
            jobs.jobIndex = action.payload.jobIndex; 
            jobs.page = action.payload.page;
            return;
        default:
            return jobs;

    }
}


const initialState = {
    location: '',
    filterBy: '',
    fullTime: false,
    lastSearch: '',
    jobs: [],
    isLoading: false,
    isLoadingNextPage: false,
    indexedJobs: [],
    jobIndex: 12,
    page: 1
}

const JobsContext = createContext();
const DispatchContext = createContext();
const JobsContextProvider = (props) => {
    const [state, dispatch] = useImmerReducer(jobsReducer, initialState);
    
    /*
    *  Higher order function to act as a kind of redux middleware
    *  if action isn't intented to middleware, fallback to regular reducer 
    */ 
    const customDispatch = useCallback(async (action) => {
        switch(action.type) {
            case ACTIONS.DO_SEARCH: {
                dispatch({
                    type: ACTIONS.IS_LOADING,
                    payload: {isLoading: true}
                })
                await fetchApiWithParameters(action.payload)
                dispatch({
                    type: ACTIONS.IS_LOADING,
                    payload: {isLoading: false}
                })
                break;
            }
            //  This one is in the middleware in case if we need to fetch page 2,..
            case ACTIONS.LOAD_MORE: {
                await loadMore(action.payload)
            }
            //  jobsReducer
            default: 
            dispatch(action)
        }

    }, [])
    const loadMore = async (payload) => {
        const {jobs, indexedJobs, page, jobIndex} = payload; 
        /*
        *   Github Jobs Api provide 50 results per page
        *   If the difference between the job[] and indexedJob[] is not < 12
        *   we need to fetch the second page with the previous query
        *
        */
        if ( jobs.length - indexedJobs.length >= 12) {
            const newIndexedJobs = [...indexedJobs, ...jobs.slice(jobIndex, jobIndex + 12)]
           const newIndexedJobsFiltered = uniq(newIndexedJobs, job => job.id )

            dispatch({type: ACTIONS.SET_INDEXED_JOBS, payload: {
                indexedJobs: newIndexedJobsFiltered,
                jobIndex: jobIndex + 12
            }})
        } else {
            //  FETCH new page and do the calculation
            dispatch({type: ACTIONS.IS_LOADING_NEXT_PAGE, payload: {isLoadingNextPage: true}})
            
           const jobsNextPage = await fetchApiWithParameters({...payload, loadNextPage: true})
           //  Grab the jobs we didn't set in indexedJobs
           const jobsLeftover = jobs.slice(indexedJobs.length, jobs.length)
           const newJobs = [...jobs, ...jobsLeftover, ...jobsNextPage]
           const newIndexedJobs = [...indexedJobs, ...newJobs.slice(jobIndex, jobIndex + 12)]  
           const newIndexedJobsFiltered = uniq(newIndexedJobs, job => job.id )

           dispatch({
               type: ACTIONS.SET_INDEXED_JOBS_NEXT_PAGE,
               payload: {
                   jobs: newJobs,
                   indexedJobs: newIndexedJobsFiltered,
                   jobIndex: jobIndex + 12,
                   page: page + 1
               }
           })   
           dispatch({type: ACTIONS.IS_LOADING_NEXT_PAGE, payload: {isLoadingNextPage: false}})

        }

    }
   
    const fetchApiWithParameters = async({location = '' , filterBy = '', fullTime = false, page = 1, lastSearch = '', loadNextPage = false}) => {
        

        let queryString = "";

            if(location !== "") {
                if(queryString === "") {
                    queryString += "?"
                } else {
                    queryString += "&"
                }
                queryString += `location=${location.split(" ").join('+')}`
            }
            if(filterBy !== "") {
                if(queryString === "") {
                    queryString += "?"
                } else {
                    queryString += "&"
                }
                queryString += `description=${filterBy.split(" ").join('+')}`
            }
            if(fullTime) {
                if(queryString === "") {
                    queryString += "?"
                } else {
                    queryString += "&"
                }
                queryString += `full_time=on`
            }
            //setLastSearch(`${URL_API}${queryString}`);
            if(loadNextPage) {
                queryString = `${lastSearch}${lastSearch === "" ? "?" : "&"}page=${page +1}`
            }
            
            dispatch({
                type: ACTIONS.SET_LAST_SEARCH,
                payload: {lastSearch: `${queryString}`}
            })
            const URL = ENV === 'DEV' ? 'jobs.json': `${URL_API}${queryString}`
            return fetch(URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
                return response.json()
            })
            .then((myJson) => {
                const jobs = uniq(myJson, job => job.id )
                if(loadNextPage) {
                   return jobs
                } else {
                    dispatch({
                        type: ACTIONS.SET_JOBS,
                        payload: {jobs: jobs}
                    })
                }
               
            })
    }
    return (
        <DispatchContext.Provider value={{dispatch : customDispatch}}>
            <JobsContext.Provider value={{state}}>
                {props.children}
            </JobsContext.Provider>
        </DispatchContext.Provider>
    )
}



export {JobsContextProvider, JobsContext, DispatchContext}
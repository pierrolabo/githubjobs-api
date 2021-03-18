import { createContext, useState} from 'react';
import {URL_API} from '../../constants/Constants';

const HookFilterContext = createContext();
const HookFilterProvider = (props) => {
    const [location, setLocation] = useState("");
    const [fullTime, setFullTime] = useState(false);
    const [filterBy, setFilterBy] = useState("");
    const [jobs, setJobs] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [lastSearch, setLastSearch] = useState("")
    const doSearch = () => {
            setIsLoading(true)
            let queryString = "";
            if(location !== "") {
                console.log("location isn't empty !!")
                if(queryString === "") {
                    queryString += "?"
                } else {
                    queryString += "&"
                }
                queryString += `location=${location.split(" ").join('+')}`
            }
            if(filterBy !== "") {
                console.log("filterBy: ", filterBy);
                console.log(filterBy.split(" ").join('+'))
                console.log("filterBy isn't empty !!")
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
            console.log("sending: ", `${URL_API}${queryString}`)
            setLastSearch(`${URL_API}${queryString}`);
            fetch(`${URL_API}${queryString}`, {
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
    return (
        <HookFilterContext.Provider value={[location, fullTime, setLocation, setFullTime, filterBy, setFilterBy, doSearch, jobs, setJobs,isLoading, setIsLoading]}>
            {props.children}
        </HookFilterContext.Provider>
    )
}
export {HookFilterContext, HookFilterProvider};
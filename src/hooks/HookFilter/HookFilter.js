import { createContext, useState, useEffect} from 'react';

const HookFilterContext = createContext();

const HookFilterProvider = (props) => {
    const [location, setLocation] = useState();
    const [fullTime, setFullTime] = useState(false);

    return (
        <HookFilterContext.Provider value={[location, fullTime, setLocation]}>
            {props.children}
        </HookFilterContext.Provider>
    )
}
export {HookFilterContext, HookFilterProvider};
import { createContext, useState} from 'react';

const HookFilterContext = createContext();

const HookFilterProvider = (props) => {
    const [location, setLocation] = useState();
    const [fullTime, setFullTime] = useState(false);

    return (
        <HookFilterContext.Provider value={[location, fullTime, setLocation, setFullTime]}>
            {props.children}
        </HookFilterContext.Provider>
    )
}
export {HookFilterContext, HookFilterProvider};
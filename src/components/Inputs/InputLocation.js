import { useContext } from "react";
import {HookFilterContext} from '../../hooks/HookFilter/HookFilter';

const InputLocation = ({type, parentName}) => {
    //  Why do we have to import everything from right order in context ??
    const [location, fullTime, setLocation, setFullTime] = useContext(HookFilterContext)
    const handleChange = (e) => {
        setLocation(e.target.value)
    }
    return (
        <div className={`${parentName}__inputLocation ${type === "MOBILE" ? "hide-on-mobile" : ''}`}>
                    <div className={`${parentName}__inputLocation__logo`}>
                        <div className={`${parentName}__inputLocation__logo--locationLogo`}></div>
                    </div>
                    <input type="text" value={location} onChange={handleChange} className={`${parentName}__inputLocation--input`} placeholder="Filter by location..."/>
                </div>
    )
}
export default InputLocation;
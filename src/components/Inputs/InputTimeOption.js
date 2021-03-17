import { useContext } from "react";
import {HookFilterContext} from '../../hooks/HookFilter/HookFilter';

const InputTimeOption = ({type, placeholder, parentName}) => {
    const [location, fullTime, setLocation, setFullTime] = useContext(HookFilterContext)
    const handleChange = () => {
        setFullTime(!fullTime)
    }
    return (
        <div className={`${parentName}__inputTimeOption ${type === "MOBILE" ? "hide-on-mobile" : ""}`}>
            <input onChange={handleChange} defaultChecked={fullTime} type="checkbox" name="inputTimeOption" id="inputTimeOption"className={`${parentName}__inputTimeOption--input`}/>
            <label htmlFor="inputTimeOption">{placeholder}</label>
        </div>
    )
}

export default InputTimeOption;
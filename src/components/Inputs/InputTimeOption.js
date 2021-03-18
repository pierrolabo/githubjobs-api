import { useContext } from "react";
import { JobsContext, DispatchContext } from "../../hooks/JobsContext/JobsContext";
import {ACTIONS} from '../../constants/JobAction';

const InputTimeOption = ({type, placeholder, parentName}) => {
  const {dispatch} = useContext(DispatchContext)
  const {state} = useContext(JobsContext);
  const {fullTime} = state
    const handleChange = () => {
        dispatch({type: ACTIONS.TOGGLE_FULLTIME})
    }
    return (
        <div className={`${parentName}__inputTimeOption ${type === "MOBILE" ? "hide-on-mobile" : ""}`}>
            <input onChange={handleChange} defaultChecked={fullTime} type="checkbox" name="inputTimeOption" id="inputTimeOption"className={`${parentName}__inputTimeOption--input`}/>
            <label htmlFor="inputTimeOption">{placeholder}</label>
        </div>
    )
}

export default InputTimeOption;
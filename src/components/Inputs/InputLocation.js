import { useContext } from "react";
import { JobsContext, DispatchContext } from "../../hooks/JobsContext/JobsContext";
import {ACTIONS} from '../../constants/JobAction';

const InputLocation = ({ type, parentName }) => {
  const {dispatch} = useContext(DispatchContext)
  const {state} = useContext(JobsContext);
  const {location} = state
  const handleChange = (e) => {
    //setLocation(e.target.value)
    dispatch({type: ACTIONS.SET_LOCATION, payload: {location: e.target.value}})
  };
  return (
    <div
      className={`${parentName}__inputLocation ${
        type === "MOBILE" ? "hide-on-mobile" : ""
      }`}
    >
      <div className={`${parentName}__inputLocation__logo`}>
        <div
          className={`${parentName}__inputLocation__logo--locationLogo`}
        ></div>
      </div>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        className={`${parentName}__inputLocation--input`}
        placeholder="Filter by location..."
      />
    </div>
  );
};
export default InputLocation;

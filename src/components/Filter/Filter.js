import { useContext } from "react";
import useModal from '../../hooks/HookModal/useModal';
import {JobsContext, DispatchContext} from '../../hooks/JobsContext/JobsContext';
import { ACTIONS } from "../../constants/JobAction";

import InputLocation from '../Inputs/InputLocation';
import InputTimeOption from '../Inputs/InputTimeOption';
import ModalFilter from '../ModalFilter/ModalFilter';
import './Filter.scss'

const Filter = () => {
    const {dispatch} = useContext(DispatchContext)
  const {state} = useContext(JobsContext);
  const {filterBy} = state;
   const {isShowing, toggleModal} = useModal();

   //   Trigger reducer to query API with user defined parameters
   const doSearch = () => {
    //  We must provide actual state to the function
    dispatch({type: ACTIONS.DO_SEARCH, payload: {...state}})
   }

   const handleChangeFilterBy = (e) => {
    dispatch({type: ACTIONS.SET_FILTER_BY, payload: {filter_by: e.target.value}} )
   }
    return (
        <div className="filter__container">
            <div className="filter">
                <div className="filter__searchField">
                    <div className="filter__searchField__logo hide-on-mobile">
                     <div className="filter__searchField__logo--searchLogo"></div>
                    </div>
                    <input value={filterBy} onChange={handleChangeFilterBy} type="text" className="filter__searchField--input" placeholder="Filter by title..."/>
                </div>
            <InputLocation type={"MOBILE"} parentName={"filter"}/>    
            <div className="filter__searchOptions">
                <div className="filter__searchOptions__filter hide-on-tablet">
                    <div onClick={toggleModal} className="filter__searchOptions__filter--logo hide-on-tablet"/>
                </div>
               <InputTimeOption type={"MOBILE"} placeholder={"Full Time"} parentName={"filter"}/>
                <div onClick={doSearch} className="filter__searchOptions__searchButton">
                    <div className="filter__searchOptions__searchButton--logo hide-on-tablet"></div>
                    <p className="filter__searchOptions__searchButton--text hide-on-mobile">Search</p>
                </div>
                </div>
            </div>
            <ModalFilter isShowing={isShowing} hide={toggleModal}/>

        </div>
    )
}

export default Filter;
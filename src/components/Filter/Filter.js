import './Filter.scss'
import InputLocation from '../Inputs/InputLocation';
import InputTimeOption from '../Inputs/InputTimeOption';
import ModalFilter from '../ModalFilter/ModalFilter';
import useModal from '../../hooks/HookModal/useModal';

const Filter = () => {
   const {isShowing, toggleModal} = useModal();
    return (
        <div className="filter__container">
            <div className="filter">
                <div className="filter__searchField">
                    <div className="filter__searchField__logo hide-on-mobile">
                     <div className="filter__searchField__logo--searchLogo"></div>
                    </div>
                    <input type="text" className="filter__searchField--input" placeholder="Filter by title..."/>
                </div>
            <InputLocation type={"MOBILE"} parentName={"filter"}/>    
            <div className="filter__searchOptions">
                <div className="filter__searchOptions__filter hide-on-tablet">
                    <div onClick={toggleModal} className="filter__searchOptions__filter--logo hide-on-tablet"/>
                </div>
               <InputTimeOption type={"MOBILE"} placeholder={"Full Time"} parentName={"filter"}/>
                <div className="filter__searchOptions__searchButton">
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
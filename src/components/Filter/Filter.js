import './Filter.scss'
import InputLocation from '../Inputs/InputLocation';
import InputTimeOption from '../Inputs/InputTimeOption';

const Filter = () => {
    return (
        <div className="filter__container">
            <div className="filter">
                <div className="filter__searchField">
                    <div className="filter__searchField__logo hide-on-mobile">
                     <div className="filter__searchField__logo--searchLogo"></div>
                    </div>
                    <input type="text" className="filter__searchField--input" placeholder="Filter by title..."/>
                </div>
            <InputLocation/>    
            <div className="filter__searchOptions">
                <div className="filter__searchOptions__filter hide-on-tablet">
                    <div className="filter__searchOptions__filter--logo hide-on-tablet"/>
                </div>
               <InputTimeOption/>
                <div className="filter__searchOptions__searchButton">
                    <div className="filter__searchOptions__searchButton--logo hide-on-tablet"></div>
                    <p className="filter__searchOptions__searchButton--text hide-on-mobile">Search</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;
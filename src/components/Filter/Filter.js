import searchLogo from '../../assets/desktop/icon-search.svg'

import './Filter.scss'
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
            <div className="filter__searchOptions">
                <div className="filter__searchOptions__filter">
                    <div className="filter__searchOptions__filter--logo hide-on-tablet"/>
                </div>
                <div className="filter__searchOptions__searchButton">
                    <div className="filter__searchOptions__searchButton--logo"><span className="filter__searchOptions__searchButton--text hide-on-mobile">Search</span></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;
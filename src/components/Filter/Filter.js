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
                <div className="filter__searchOptions__filterByLocation hide-on-mobile">
                    <div className="filter__searchOptions__filterByLocation__logo ">
                        <div className="filter__searchOptions__filterByLocation__logo--locationLogo"></div>
                    </div>
                    <input type="text" className="filter__searchOptions__filterByLocation--input " placeholder="Filter by location..."/>

                </div>
            <div className="filter__searchOptions">
                <div className="filter__searchOptions__filter hide-on-tablet">
                    <div className="filter__searchOptions__filter--logo hide-on-tablet"/>
                </div>
                <div className="filter__searchOptions__timeOption hide-on-mobile">
                    <input type="checkbox" name="timeoption" id="timeoption"className="filter__searchOptions__timeOption--input"/>
                    <label for="timeoption">Full Time</label>
                </div>
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
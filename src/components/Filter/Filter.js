import searchLogo from '../../assets/desktop/icon-search.svg'

import './Filter.scss'
const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__container">
            <input type="text" className="filter__container--input" placeholder="Filter by title..."/>
            <div className="filter__container__icons">
            <div className="filter__container__icons--filterlogo__container">
                <div className="filter__container__icons--filterlogo__container--logo"/>
            </div>
            <div className="filter__container__icons--searchlogo__container">
                <img src={searchLogo} alt=""/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Filter;
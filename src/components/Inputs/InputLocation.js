const InputLocation = () => {
    return (
        <div className="filter__searchOptions__filterByLocation hide-on-mobile">
                    <div className="filter__searchOptions__filterByLocation__logo ">
                        <div className="filter__searchOptions__filterByLocation__logo--locationLogo"></div>
                    </div>
                    <input type="text" className="filter__searchOptions__filterByLocation--input " placeholder="Filter by location..."/>
                </div>
    )
}

export default InputLocation;
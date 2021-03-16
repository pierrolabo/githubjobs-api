/*
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
*/
const InputLocation = ({type, parentName}) => {
    return (
        <div className={`${parentName}__inputLocation ${type === "MOBILE" ? "hide-on-mobile" : ''}`}>
                    <div className={`${parentName}__inputLocation__logo`}>
                        <div className={`${parentName}__inputLocation__logo--locationLogo`}></div>
                    </div>
                    <input type="text" className={`${parentName}__inputLocation--input`} placeholder="Filter by location..."/>
                </div>
    )
}
export default InputLocation;
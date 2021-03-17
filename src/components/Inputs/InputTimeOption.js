/*
const InputTimeOption = ({type, placeholder, parentName}) => {
    return (
        <div className={`filter__searchOptions__timeOption ${type === "MOBILE" ? "hide-on-mobile" : ""}`}>
            <input type="checkbox" name="timeoption" id="timeoption"className="filter__searchOptions__timeOption--input"/>
            <label for="timeoption">{placeholder}</label>
        </div>
    )
}

export default InputTimeOption;

*/

const InputTimeOption = ({type, placeholder, parentName}) => {
    return (
        <div className={`${parentName}__inputTimeOption ${type === "MOBILE" ? "hide-on-mobile" : ""}`}>
            <input type="checkbox" name="inputTimeOption" id="inputTimeOption"className={`${parentName}__inputTimeOption--input`}/>
            <label htmlFor="inputTimeOption">{placeholder}</label>
        </div>
    )
}

export default InputTimeOption;
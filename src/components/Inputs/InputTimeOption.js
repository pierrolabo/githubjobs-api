const InputTimeOption = () => {
    return (
        <div className="filter__searchOptions__timeOption hide-on-mobile">
            <input type="checkbox" name="timeoption" id="timeoption"className="filter__searchOptions__timeOption--input"/>
            <label for="timeoption">Full Time</label>
        </div>
    )
}

export default InputTimeOption;
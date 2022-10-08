
function TileInfo({sorting, greased, handleGreased}){
    return(
        <div>
            <p> Sort by </p>
            <select onChange = {sorting}>
                <option value = 'name'> Name </option>
                <option value = 'Weight'> Weight </option>
            </select>

            <input
            onChange = {handleGreased}
            type = 'checkbox'
            checked = {greased}
            />

            <label> Greased Pigs </label>
        </div>
    )
}

export default TileInfo;
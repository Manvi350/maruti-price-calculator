
function CitySelector({city,setCity,cities}){
    return(
        <select value={city} onChange={(e)=>setCity(e.target.value)}>
        <option value="" disabled>Select city</option>
        {cities.map((c)=>(
        <option key={c}>{c}</option>
        ))}
      </select>
    );
}
export default CitySelector;
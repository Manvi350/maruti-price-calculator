
function VariantSelector({variant,setVariant,variants}){
    return(
        <select value={variant} onChange={(e)=>setVariant(e.target.value)} >
        <option value="" disabled>Select variant</option>
        {variants.map((v)=>(
        <option key={v}>{v}</option>
        ))}
      </select>
    );
}
export default VariantSelector;
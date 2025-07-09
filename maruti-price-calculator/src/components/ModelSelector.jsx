
function ModelSelector ({model,setModel,models}){
    return(
        <select value={model} onChange={(e)=>setModel(e.target.value)} >
        <option value="" disabled>Select model</option>
        {models.map((m)=>(
        <option key={m}>{m}</option>
        ))}
      </select>
    );
}
export default ModelSelector;
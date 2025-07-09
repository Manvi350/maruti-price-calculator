
function PriceDisplay({price}){
    if(!price) return null;
    return (
        <h2>{typeof price ===String ? price : `Price:₹${price.toLocaleString()}`} </h2>
    );
}
export default PriceDisplay;
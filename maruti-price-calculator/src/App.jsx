import {useState} from "react";
import prices from './data/prices';
import features from "./data/feature";
import ModelSelector from "./components/ModelSelector";
import VariantSelector from "./components/VariantSelector";
import CitySelector from "./components/CitySelector";
import PriceDisplay from "./components/PriceDisplay";

function App(){
  const[model,setModel]=useState("");
  const[variant,setVariant]=useState("");
  const[city,setCity]=useState("");
  const[price,setPrice]=useState(null);

  const calculatePrice=()=>{
    const result= prices?.[model]?.[variant]?.[city];
    setPrice(result || "Invalid selection");
    };

  return(
    <div className="container">
      <h1> Maruti price calculator</h1>

      <ModelSelector model={model} setModel={setModel} models={Object.keys(prices)} />
      {/* {model && <img src={`/${model}.jpeg`} alt={model} className="car-image"/>} */}

      {model && (
        <VariantSelector
          variant={variant} 
          setVariant={setVariant} 
          variants={Object.keys(prices[model])} />
      )}

      {model && variant && (
        <CitySelector 
          city={city} 
          setCity={setCity} 
          cities={Object.keys(prices[model][variant])} />
      )}

      {model && variant && features[model] && features[model][variant] && (
        <div className="features-box">
          <h3> Features of {model} {variant}</h3>
          <ul>
            {features[model][variant].map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={calculatePrice}>Calculate price</button>

      <PriceDisplay price={price} />
      {price && (
        <div className="summary-box">
          <h3>✅ Selection Summary</h3>
          <p>Model: {model}</p>
          <p>Variant: {variant}</p>
          <p>City: {city}</p>
          <p><strong>Price: ₹{price}</strong></p>
        </div>
      )}

    </div>
  );
};

export default App;
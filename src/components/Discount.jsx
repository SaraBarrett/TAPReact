import { useState } from "react";

export default function Discount() {

    const[price, setPrice] = useState('100');

function applyDiscount(valueDiscount){
    setPrice(valueDiscount);
}
return (
    <div>
    <p data-testid="price">{price}€</p>
    <button onClick={() => applyDiscount('75')}>Apply Discount</button>
    </div>
);
}
import React from "react";
import {useParams} from "react-router-dom";
import productArray from "./productArray";

function ProductDetails() {
    let {id} = useParams();

    return (
        <div>
            <h1>{productArray[id].title}</h1>
            <img src = {productArray[id].image} alt="Placeholder image" width={700}></img>
            <h3>Description</h3>
            <p>{productArray[id].description}</p>
            <p>Price: ${productArray[id].price}</p>
        </div>
    );
}

export default ProductDetails;
import React from "react";
import {useParams} from "react-router-dom";
import productArray from "./productArray";
import ProductTile from "./ProductTile";

function Category() {
    let {category} = useParams();

    return (
        <div>
            <h1>{category}</h1>
            <div className="product-list">
                {productArray.map( (prod, index) => {
                    if (prod.category == category) {
                        return (
                            <div key={prod.id} className="basket-item">
                                <ProductTile key={index} id={prod.id} />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}
export default Category;
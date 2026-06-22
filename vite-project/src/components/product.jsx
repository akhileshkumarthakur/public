import React from "react";
import './product.css'
import cloudImage from './cloud-image.webp'

function Product () {

    const data = [
        {
            image: "this is image url",
            title: "Wireless Headphones",
            rating: "⭐⭐⭐⭐☆ (4.2)",
            price: "$59.99"

        }
    ]

    return (
        <div className="products-container">
            <div className="product-card">
                <img
                className="product-image"
                src={cloudImage}
                alt="Product Image"
                />

                <div className="product-title">
                {data[0].title}
                </div>

                <div className="product-rating">
                {data[0].rating}
                </div>

                <div className="product-price">
                {data[0].price}
                </div>

                <div className="button-div"><button className="cart-button">Add to Cart</button></div>
            </div>

             <div className="product-card">
                <img
                className="product-image"
                src={cloudImage}
                alt="Product Image"
                />

                <div className="product-title">
                {data[0].title}
                </div>

                <div className="product-rating">
                {data[0].rating}
                </div>

                <div className="product-price">
                {data[0].price}
                </div>

                <div className="button-div"><button className="cart-button">Add to Cart</button></div>
            </div>
        </div>
    )
}




export default Product

import React from "react";
import "../css/product.css";
import cloudImage from "../assets/cloud-image.webp";
import data from "./products-data"



function Product() {
  return (
    <div className="products-container">
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-image"
            src={cloudImage}
            alt={product.title}
          />

          <div className="product-title">
            {product.title}
          </div>

          <div className="product-rating">
            {product.rating}
          </div>

          <div className="product-price">
            ${product.price}
          </div>

          <div className="button-div">
            <button className="cart-button">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
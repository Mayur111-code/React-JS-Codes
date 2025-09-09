import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ products }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        {/* Product Image */}
        <img
          src={products.image}
          className="card-img-top"
          alt={products.name}
          style={{ height: "200px", objectFit: "contain" }}
        />

        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title">{products.name}</h5>
          <p className="card-text">{products.description}</p>
          <p className="mb-1">
            <strong>Category:</strong> {products.category}
          </p>
          <p className="mb-1">
            <strong>Price:</strong> ₹{products.price}
          </p>
          <p className={products.stock ? "text-success" : "text-danger"}>
            {products.stock ? "In Stock" : "Out of Stock"}
          </p>
          <button className="btn btn-primary" disabled={!products.stock}>
            {products.stock ? "Buy Now" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

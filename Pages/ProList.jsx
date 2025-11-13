import React, { useState, useEffect } from "react";
import Pro from "../component/ProCard";
import productsData from "../data";

const ProList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product Listing</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <Pro key={product.id} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProList;

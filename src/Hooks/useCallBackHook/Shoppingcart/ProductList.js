import React from "react";

function ProductList({ products, onAddToCart }) {
  console.log("Rendering productList");

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onAddToCart(product)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ProductList);

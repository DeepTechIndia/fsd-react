import React from "react";

function Cart({ cartItems, onRemoveFromCart }) {
  console.log("Rendering Cart");

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Cart);

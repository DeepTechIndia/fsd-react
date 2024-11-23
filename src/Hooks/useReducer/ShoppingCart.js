import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "HeadPhones", price: 2000 },
  { id: 4, name: "Smart watch", price: 5000 },
];

function cartReducer(state, action) {
  switch (action.type) {
    case "add_item":
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.item, quantity: 1 }];

    case "update_quantity":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );

    case "remove_item":
      return state.filter((item) => item.id !== action.id);

    case "clear_cart":
      return [];

    default:
      throw new Error("Unknown action type");
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const handleAddItem = (product) => {
    dispatch({ type: "add_item", item: product });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "update_quantity", id, quantity });
    } else {
      dispatch({ type: "remove_item", id });
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "remove_item", id });
  };

  const handleClearCart = () => {
    dispatch({ type: "clear_cart" });
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* products */}
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleAddItem(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Cart */}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} x {item.quantity} ={" "}
              {item.price * item.quantity}
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>The Cart is Empty</p>
      )}

      {/* total */}
      {cart.length > 0 && (
        <div>
          <h3>Total : {calculateTotal()}</h3>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

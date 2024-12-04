import { useCallback, useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "HeadPhones", price: 100 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.some((item) => item.id === product.id);
      if (itemExist) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  }, []);

  const handleRemoveFromcart = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }, []);

  return (
    <div>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromcart} />
    </div>
  );
}

export default ShoppingCart;

import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddTocart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <div className="mb-4">
        <input
          text="text"
          className="form-control"
          placeholder="Search Products.."
          value={searchTerm}
          onChange={(e) => handleSearchTerm(e)}
        />
      </div>
      <ProductList
        products={products}
        searchTerm={searchTerm}
        onAddToCart={handleAddTocart}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;

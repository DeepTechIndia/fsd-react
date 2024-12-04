import { useMemo } from "react";

function Cart({ cartItems }) {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  console.log("rendering cart");

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="card">
        <ul className="list-group">
          {cartItems.map((item, i) => (
            <li key={i} className="list-group-item">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      </div>

      <h3>Total : ${totalPrice}</h3>
    </div>
  );
}

export default Cart;


// useRef
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeItem } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return <h2 className="container">Cart is empty</h2>;

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <input
              type="number"
              value={item.qty}
              min="1"
              onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <Link to="/checkout" className="btn">Checkout</Link>
    </div>
  );
}

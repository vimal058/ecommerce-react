import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed by ${name}! Total: ₹${cart.reduce((s, i) => s + i.price * i.qty, 0)}`);
    clearCart();
  };

  if (cart.length === 0) return <h2 className="container">No items to checkout</h2>;

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="btn" type="submit">Place Order</button>
      </form>
    </div>
  );
}

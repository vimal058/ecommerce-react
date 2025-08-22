import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <div className="btn-row">
              <Link to={`/product/${p.id}`} className="btn">View</Link>
              <button className="btn" onClick={() => addToCart(p)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

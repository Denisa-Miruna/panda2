import React from "react";

const accessories = [
  { name: "🎩 Hat", price: 50 },
  { name: "🕶 Glasses", price: 100 },
  { name: "👕 Hoodie", price: 200 },
];

export default function Shop({ tokens, setTokens }) {
  const buyItem = (price, name) => {
    if (tokens < price) {
      alert("Nu ai suficiente tokenuri!");
      return;
    }

    // TODO: aici moveCall spend on-chain
    setTokens(tokens - price);
    alert(`Ai cumpărat ${name}! 🎉`);
  };

  return (
    <div style={{ margin: "20px auto", border: "1px solid #ccc", padding: "20px", width: "300px", borderRadius: "10px" }}>
      <h2>🛒 Panda Shop</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {accessories.map((item) => (
          <li key={item.name} style={{ marginBottom: "10px" }}>
            {item.name} – {item.price} tokens
            <button onClick={() => buyItem(item.price, item.name)} style={{ marginLeft: "10px" }}>Buy</button>
          </li>
        ))}
      </ul>
      <p>Tokens disponibile: {tokens}</p>
    </div>
  );
}

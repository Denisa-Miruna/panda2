import React from "react";
import hatImg from "./assets/hat.jpg";
import glassesImg from "./assets/glasses.jpg";

const accessories = [
  { name: "Hat", price: 50, img: hatImg, key: "hat" },
  { name: "Glasses", price: 100, img: glassesImg, key: "glasses" },
  { name: "Hoodie", price: 200, img: null, key: "hoodie" }, // overlay
];

export default function Shop({ tokens, setTokens, equipped, setEquipped }) {
  const buyItem = (item) => {
    if (tokens < item.price) {
      alert("Nu ai suficiente tokenuri!");
      return;
    }
    setTokens(tokens - item.price);
    setEquipped({ ...equipped, [item.key]: true });
    alert(`Ai cumpărat ${item.name}! 🎉`);
  };

  return (
    <div style={{ margin: "20px auto", width: "400px", border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
      <h2>🛒 Panda Shop</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {accessories.map((item) => (
          <div key={item.name} style={{ textAlign: "center" }}>
            {item.img ? (
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "80px", cursor: "pointer", transition: "transform 0.2s" }}
                onClick={() => buyItem(item)}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            ) : (
              <div
                onClick={() => buyItem(item)}
                style={{
                  width: "80px",
                  height: "40px",
                  backgroundColor: "rgba(255,0,0,0.5)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Hoodie
              </div>
            )}
            <p>{item.name}</p>
            <p>{item.price} tokens</p>
          </div>
        ))}
      </div>
      <p>Tokens disponibile: {tokens}</p>
    </div>
  );
}

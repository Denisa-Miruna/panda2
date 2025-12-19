import React, { useState, useEffect } from "react";
import pandaImg from "./assets/panda.png";
import hatImg from "./assets/hat.jpg";
import glassesImg from "./assets/glasses.jpg";

export default function Game({ tokens, setTokens, equipped, setEquipped }) {
  const [boost, setBoost] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [adVisible, setAdVisible] = useState(false);

  const click = () => {
    setTokens((t) => t + (boost ? 5 : 1));
    setPulse(true);
    setTimeout(() => setPulse(false), 200);
  };

  const watchAd = () => {
    // Arată fereastra de "ad"
    setAdVisible(true);

    // După 10 secunde, dispari fereastra și pornești autoclick
    setTimeout(() => {
      setAdVisible(false);
      startAutoClick();
    }, 10000); // 10 sec
  };

  const startAutoClick = () => {
    setBoost(true);

    const interval = setInterval(() => {
      setTokens((t) => t + 1); // adaugă 1 token la fiecare 0.5s
    }, 500);

    // Oprește boost după 30 secunde
    setTimeout(() => {
      clearInterval(interval);
      setBoost(false);
      alert("Autoclick 30 sec terminat!");
    }, 30000);
  };

  return (
    <div style={{ margin: "20px auto", width: "400px", textAlign: "center" }}>
      <h2>🐼 Panda Clicker</h2>
      <p>Tokens: {tokens}</p>

      {/* Panda */}
      <div
        style={{
          position: "relative",
          width: "300px",
          margin: "auto",
          transition: "transform 0.2s",
          transform: pulse ? "scale(1.05)" : "scale(1)",
        }}
      >
        <img src={pandaImg} alt="Panda" style={{ width: "100%" }} />
        {equipped.hat && (
          <img
            src={hatImg}
            alt="Hat"
            style={{
              position: "absolute",
              top: "0px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              transition: "opacity 0.5s",
              opacity: equipped.hat ? 1 : 0,
            }}
          />
        )}
        {equipped.glasses && (
          <img
            src={glassesImg}
            alt="Glasses"
            style={{
              position: "absolute",
              top: "60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              transition: "opacity 0.5s",
              opacity: equipped.glasses ? 1 : 0,
            }}
          />
        )}
        {equipped.hoodie && (
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              height: "80px",
              backgroundColor: "rgba(255,0,0,0.4)",
              borderRadius: "20px",
              transition: "opacity 0.5s",
              opacity: equipped.hoodie ? 1 : 0,
            }}
          />
        )}
      </div>

      {/* Butoane */}
      <button onClick={click} style={{ marginRight: "10px", marginTop: "10px" }}>
        CLICK
      </button>
      <button onClick={watchAd}>Watch Ad (Boost 30s)</button>

      {/* Fereastra de ad simulata */}
      {adVisible && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "200px",
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            borderRadius: "10px",
            zIndex: 9999,
          }}
        >
          Ad is playing... ⏳
        </div>
      )}
    </div>
  );
}

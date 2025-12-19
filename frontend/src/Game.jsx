import React, { useState } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";

export default function Game({ tokens, setTokens }) {
  const account = useCurrentAccount();
  const [boost, setBoost] = useState(false);

  const click = () => {
    if (!account) {
      alert("Connect wallet first!");
      return;
    }

    // TODO: aici poate fi moveCall mint on-chain mai târziu
    setTokens((t) => t + (boost ? 5 : 1));
  };

  const watchAd = () => {
    setBoost(true);
    setTimeout(() => setBoost(false), 30000);
    alert("🎥 Booster 30s activ!");
  };

  return (
    <div style={{ margin: "20px auto", border: "1px solid #ccc", padding: "20px", width: "300px", borderRadius: "10px" }}>
      <h2>🐼 Panda Clicker</h2>
      <p>Tokens: {tokens}</p>
      <button onClick={click} style={{ marginRight: "10px" }}>CLICK</button>
      <button onClick={watchAd}>Watch Ad (Boost)</button>
    </div>
  );
}

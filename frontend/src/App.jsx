import React, { useState } from "react";
import { ConnectButton } from "@mysten/dapp-kit";
import Game from "./Game.jsx";
import Shop from "./Shop.jsx";

export default function App() {
  const [tokens, setTokens] = useState(0);
  const [equipped, setEquipped] = useState({ hat: false, glasses: false});

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🐼 Panda Clicker Game</h1>
      <ConnectButton />
      <Game tokens={tokens} setTokens={setTokens} equipped={equipped} setEquipped={setEquipped} />
      <Shop tokens={tokens} setTokens={setTokens} equipped={equipped} setEquipped={setEquipped} />
    </div>
  );
}

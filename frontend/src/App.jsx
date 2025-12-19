import React, { useState } from "react";
import { ConnectButton, useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";
import Game from "./Game.jsx";
import Shop from "./Shop.jsx";

export default function App() {
  const [tokens, setTokens] = useState(0);
  const account = useCurrentAccount();

  // Exemplu: afișează obiectele/account de pe devnet
  const { data } = useSuiClientQuery("getOwnedObjects", { owner: account?.address ?? "" });

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🐼 Panda Clicker Game</h1>

      {/* Wallet connect */}
      <ConnectButton />

      {account && <p>Connected wallet: {account.address}</p>}

      {/* Info despre obiecte */}
      {account && <p>Your objects: {JSON.stringify(data?.data ?? [])}</p>}

      {/* Clicker */}
      <Game tokens={tokens} setTokens={setTokens} />

      {/* Shop */}
      <Shop tokens={tokens} setTokens={setTokens} />
    </div>
  );
}

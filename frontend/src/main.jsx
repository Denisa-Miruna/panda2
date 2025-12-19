import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const networks = { devnet: { url: getFullnodeUrl("devnet") } };

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={new QueryClient()}>
    <SuiClientProvider networks={networks} defaultNetwork="devnet">
      <WalletProvider>
        <App />
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
);

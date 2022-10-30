import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import type React from "react";

const { chains, provider } = configureChains(Object.values(chain), [
  infuraProvider({ apiKey: process.env.INFURA_KEY }),
  alchemyProvider({ apiKey: process.env.ALCHEMY_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Rugged",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const WalletProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

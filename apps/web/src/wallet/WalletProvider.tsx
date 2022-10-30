import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import type React from "react";
import { Wallet } from "./Wallet";

interface Props {
  children: React.ReactNode;
  wallet: Wallet;
}

export const WalletProvider: React.FC<Props> = ({ children, wallet }) => {
  console.log(wallet);
  return (
    <WagmiConfig client={wallet.client}>
      <RainbowKitProvider chains={wallet.chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

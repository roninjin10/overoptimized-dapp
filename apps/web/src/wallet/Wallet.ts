import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(Object.values(chain), [
  infuraProvider({ apiKey: import.meta.env.INFURA_KEY }),
  alchemyProvider({ apiKey: import.meta.env.ALCHEMY_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Rugged",
  chains,
});

export class Wallet {
  public readonly chains = chains;
  public readonly client = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
}

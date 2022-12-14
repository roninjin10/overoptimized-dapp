import { useReducer } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppProviders } from "./AppProviders";
export const App = () => {
  const [count, increment] = useReducer((c) => c + 1, 0);

  return (
    <AppProviders>
      <div>
        <header>App</header>
        <button onClick={increment}>{count}</button>
        <ConnectButton />
      </div>
    </AppProviders>
  );
};

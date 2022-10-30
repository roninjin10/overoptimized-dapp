import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { ApiClient } from "./api/ApiClient";
import { useGlobalState } from "./state/GlobalState";
import { WalletProvider } from "./wallet/WalletProvider";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const globalState = useGlobalState();
  const ApiProvider = globalState.apiClient.apiReact.Provider;
  return (
    <ApiProvider
      queryClient={globalState.queryClient}
      client={globalState.apiClient.apiVanilla}
    >
      <QueryClientProvider client={globalState.queryClient}>
        <WalletProvider wallet={globalState.wallet}>{children}</WalletProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
};

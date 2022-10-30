import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ApiClient } from "./api/ApiClient";
import { useGlobalState } from "./state/GlobalState";
import { WalletProvider } from "./wallet/WalletProvider";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
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
        {import.meta.env.MODE === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <WalletProvider wallet={globalState.wallet}>{children}</WalletProvider>
      </QueryClientProvider>
    </ApiProvider>
  );
};

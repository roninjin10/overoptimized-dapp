import { ApiClient } from "../api/ApiClient";
import { QueryClient } from "../api/QueryClient";
import { Wallet } from "../wallet/Wallet";
import { AppState } from "./AppState";

export class GlobalState extends AppState<GlobalState> {
  public readonly queryClient = new QueryClient();
  public readonly apiClient = new ApiClient();
  public readonly wallet = new Wallet();
}

export const useGlobalState = new GlobalState().createReactStore();

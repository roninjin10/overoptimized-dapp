import { ApiClient } from "../api/ApiClient";
import { QueryClient } from "../api/QueryClient";
import { Wallet } from "../wallet/Wallet";
import { State } from "./State";

export class GlobalState extends State<GlobalState> {
  public readonly queryClient = new QueryClient();
  public readonly apiClient = new ApiClient();
  public readonly wallet = new Wallet();
}

export const useGlobalState = new GlobalState().createReactStore();

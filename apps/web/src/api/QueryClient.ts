import { QueryClient as ReactQueryClient } from "@tanstack/react-query";
import { FIVE_MINUTES } from "../constants/time";

export class QueryClient extends ReactQueryClient {
  constructor() {
    super({
      defaultOptions: {
        queries: {
          networkMode: "online",
          refetchOnMount: true,
          refetchOnReconnect: true,
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          cacheTime: FIVE_MINUTES,
          staleTime: 0,
          suspense: false,
        },
      },
    });
  }
}

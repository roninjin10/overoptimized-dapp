import { createTRPCReact, httpBatchLink } from "@trpc/react";
import superjson from "superjson";

type Router = any;

export class ApiClient {
  public readonly url = "";
  public readonly apiReact = createTRPCReact<Router>();
  public readonly apiVanilla = this.apiReact.createClient({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: this.url,
      }),
    ],
  });
}

import createReact from "zustand";
import createVanilla from "zustand/vanilla";
import { devtools } from "zustand/middleware";

/**
 * To protect against stale state we never want to acces
 * state with this.someProp but instead want to always
 * use this.get() to get the state
 */
const VALID_KEYS = new Set(["get", "set", "createStore"]);
/**
 * The base class that other pieces of state extend from
 * I made this class based because it reduces the boilerplate
 * of using zustand with typescript a fair amount
 *
 * @see https://docs.pmnd.rs/zustand
 */
export abstract class AppState<T extends {}> {
  /**
   * Get latest zustand state
   */
  protected get!: () => T;

  /**
   * Set zustand state.   Zustand will automatically
   * persist the other keys in the state.
   *
   * @see https://docs.pmnd.rs/zustand/guides/updating-state
   */
  protected set!: (
    stateTransition: Partial<T> | ((state: T) => Partial<T>)
  ) => void;

  constructor() {
    // We never want to this.accessProperty
    // We want to always get() first to get latest zustand state
    return new Proxy(this, {
      get(target, prop) {
        if (!VALID_KEYS.has(prop as string)) {
          throw new Error(
            `Access state with this.get().${String(
              prop
            )} rather than this.${String(prop)}`
          );
        }
        return (target as any)[prop];
      },
    });
  }

  /**
   * @returns react zustand store
   */
  createReactStore = () => {
    return createReact<T>(
      devtools((set, get) => {
        this.set = set;
        this.get = get as () => T;
        return { ...this };
      }) as any
    );
  };

  /**
   * @returns vanilla zustand store
   */
  createVanillaStore = () => {
    return createVanilla<T>(
      devtools((set, get) => {
        this.set = set;
        this.get = get as () => T;
        return { ...this };
      }) as any
    );
  };
}

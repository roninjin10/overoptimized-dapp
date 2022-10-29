import { useReducer } from "react";

export const App = () => {
  const [count, increment] = useReducer((c) => c + 1, 0);

  return (
    <div>
      <header>App</header>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

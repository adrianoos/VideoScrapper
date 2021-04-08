import { createContext } from "react";

const favsContext = createContext({
  favorites: false,
  setAuthenticated: () => {}
});

const { Provider, Consumer } = favsContext;
export { Provider, Consumer };

export default favsContext;

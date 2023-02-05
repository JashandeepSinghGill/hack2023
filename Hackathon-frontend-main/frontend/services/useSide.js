import { createContext, useState, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const exposed = {
    expanded,
    setExpanded,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useSide = () => useContext(Context);

export default Provider;

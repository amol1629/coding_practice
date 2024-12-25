import React, { useMemo } from "react";
import { AppContext } from "./AppContext";

const ContextProvider = (props) => {
  const phone = "123456";
  const name = "John Doe";

  const contextValue = useMemo(() => ({ phone, name }), [phone, name]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

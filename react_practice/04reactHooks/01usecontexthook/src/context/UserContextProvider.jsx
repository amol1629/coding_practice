import React, { useMemo, useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

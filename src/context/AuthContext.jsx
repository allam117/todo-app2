import { createContext, useContext, useEffect, useState } from "react";
import { fetchProfile } from "../Api";

export const UserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
});

export const useCurrentUser = () => useContext(UserContext);

export const CurrentUserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    fetchProfile()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setCurrentUser(undefined);
      });
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

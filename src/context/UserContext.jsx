import { createContext } from "react";
export const UserContext = createContext();
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  

  const loginUser = (data) => {
    setUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };
  


  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

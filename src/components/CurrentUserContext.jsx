import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const [name, setName] = useState("Linus");
  const [url, setUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
  );
  return (
    <CurrentUserContext.Provider value={{ name, setName, url, setUrl }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

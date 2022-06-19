import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [DoctorIsLoggedIn, setDoctorIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        DoctorIsLoggedIn,
        setDoctorIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

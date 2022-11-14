import React, { createContext, useContext } from 'react';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../../utils/localstorage.util';

type AuthStore = {
  getAccount: () => string;
  setAccount: (account: any) => void;
  signOut: () => void;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthStore);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getAccount = () => {
    return getLocalStorage('account');
  };

  const setAccount = (account: any) => {
    setLocalStorage('account', account);
  };

  const signOut = () => {
    removeLocalStorage('accessToken');
  };

  const isAuthenticated = !!getLocalStorage('accessToken');

  return (
    <AuthContext.Provider
      value={{ getAccount, setAccount, signOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

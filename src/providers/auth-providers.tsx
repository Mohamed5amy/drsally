"use client";

import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { CookiesProvider } from "react-cookie";
import { ReactNode } from "react";

// Create the auth store
const store = createStore({
  authName: "_auth",
  authType: "cookie", // or "localstorage"
  cookieDomain: "", // Keep it empty unless needed
  cookieSecure: process.env.NODE_ENV === "production", // Secure cookies in production
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <CookiesProvider>
      <AuthProvider store={store}>{children}</AuthProvider>
    </CookiesProvider>
  );
}

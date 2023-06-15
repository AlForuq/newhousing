import React, { useEffect } from "react";
import { Login } from "../../components/Login";

export const LoginPage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return <Login />;
};

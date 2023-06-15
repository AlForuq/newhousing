import React, { useEffect } from "react";
import { Home } from "../../components/Home";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Home />;
};

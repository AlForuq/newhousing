import React, { useEffect } from "react";
import { AddHouse } from "../../components/AddHouse";

export const AddPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <AddHouse />;
};

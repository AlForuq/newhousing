import React, { useEffect } from "react";
import { Properties } from "../../components/Properties";

export const PropertiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Properties />;
};
export default PropertiesPage;

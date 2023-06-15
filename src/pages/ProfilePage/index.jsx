import React, { useEffect } from "react";
import { Profile } from "../../components/Profile";

export const ProfilePage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return <Profile />;
};

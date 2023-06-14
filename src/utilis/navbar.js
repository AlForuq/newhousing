import React from "react";
// import useUniqueId from "../hooks/useId";
import { HomePage } from "../pages/HomePage";
import { Details } from "../components/Details";
import { LoginPage } from "../pages/LoginPage";
import { RegsiterPage } from "../pages/RegisterPage";
import { ProfilePage } from "../pages/ProfilePage";
import { AddPage } from "../pages/AddPage";
// import { MyPropertiesPage } from "../pages/MyPropertiesPage";
// import { MyFavouritesPage } from "../pages/MyFavouritesPage";
// import { PropertiesPage } from "../pages/PropertiesPage";
// import { AddNewPage } from "../pages/AddNew";
// import { Generic } from "../pages/generic";
// import { ProperPage } from "../pages/Properties/index";
// import { SigninPage } from "../pages/Signin";
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: "2-1",
    title: "Properties",
    path: "/properties/:id",
    Element: <Details />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 4,
    title: "Login",
    path: "/login",
    Element: <LoginPage />,
    search: "?",
    hidden: true,
    private: false,
    // param: true,
  },
  {
    id: 5,
    title: "Register",
    path: "/register",
    Element: <RegsiterPage />,
    search: "?",
    hidden: true,
    private: false,
    // param: true,
  },
  // {
  //   id: 7,
  //   title: "My Properties",
  //   path: "/profile/properties",
  //   Element: <MyPropertiesPage />,
  //   search: "?",
  //   hidden: true,
  //   private: false,
  //   param: true,
  // },

  // {
  //   id: 8,
  //   title: "My Favourites",
  //   path: "/profile/properties/favourites",
  //   Element: <MyFavouritesPage />,
  //   search: "?",
  //   hidden: true,
  //   private: false,
  //   param: true,
  // },
  {
    id: 6,
    title: "My Profile",
    path: "/profile",
    Element: <ProfilePage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 9,
    title: "Add House",
    path: "/profile/add",
    Element: <AddPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 10,
    title: "Add House",
    path: "/profile/edit/:id",
    Element: <AddPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
];

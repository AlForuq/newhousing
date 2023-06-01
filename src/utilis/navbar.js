import React from "react";
// import useUniqueId from "../hooks/useId";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { Details } from "../components/Details";
// import { PropertiesPage } from "../pages/PropertiesPage";
const PropertiesPage = React.lazy(() => import("../pages/PropertiesPage"));
// import { AddNewPage } from "../pages/AddNew";
// import { Generic } from "../pages/generic";
// import { MyPropertiesPage } from "../pages/MyProperties";
// import { ProperPage } from "../pages/Properties/index";
// import { SigninPage } from "../pages/Signin";

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
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <ContactPage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/signin",
    Element: <h1>Sign in</h1>,
    search: "?",
    hidden: true,
    private: false,
    // param: true,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <h1>Sign up</h1>,
    search: "?",
    hidden: true,
    private: false,
    // param: true,
  },
  // {
  //     id: 6,
  //     title: "My Properties",
  //     path: "/profile/properties",
  //     Element: <MyPropertiesPage />,
  //     search: "?",
  //     hidden: true,
  //     private: false,
  //     param: true,
  // },
  // {
  //     id: 7,
  //     title: "Add House",
  //     path: "/profile/add",
  //     Element: <AddNewPage />,
  //     search: "?",
  //     hidden: true,
  //         private: false,
  //         param: true,
  //     },
  //     {
  //         id: 8,
  //         title: "Add House",
  //         path: "/profile/add/:id",
  //         Element: <AddNewPage />,
  //         search: "?",
  //         hidden: true,
  //         private: false,
  //         param: true,
  //     },
];

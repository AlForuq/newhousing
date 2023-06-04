import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utilis/navbar";
import { Navbar } from "../components/Navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbar.map(({ id, path, Element }) => {
          return <Route key={id} exact path={path} element={Element} />;
        })}
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Route>
    </Routes>
  );
};

export default Root;

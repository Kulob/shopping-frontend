import { Box } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import HomePage from "../Home";
import ProductPage from "../ProductPage";

const LayoutPage = () => {
  const location = useLocation();

  return location.pathname === "/login" || location.pathname === "/register" ? (
    <Outlet />
  ) : (
    <>
      <div>
        <Header />

        <Outlet />
      </div>
    </>
  );
};
export default LayoutPage;

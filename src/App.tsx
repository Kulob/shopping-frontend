import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/Home";
import { Container } from "@mui/material";
import LoginPage from "./page/Auth/Login";
import LayoutPage from "./page/Layout";
import AuthPage from "./page/Auth";
import PrivateRoute from "./router";
import ProductPage from "./page/ProductPage";
import CreateProduct from "./page/CreateProduct";
import BasketPage from "./page/Backet";
import OrderPage from "./page/Order";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Routes>
          <Route element={<LayoutPage />}>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/createProduct" element={<CreateProduct />} />
              <Route path="/backet" element={<BasketPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Route>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

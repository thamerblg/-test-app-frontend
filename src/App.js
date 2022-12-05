import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getAllClients } from "./JS/actions/clientActions";
import { getAllProducts } from "./JS/actions/productActions";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllClients());
      dispatch(getAllProducts());
    }, // eslint-disable-next-line
    []
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/products" element={<Products />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/store"
        element={
          <PrivateRoute>
            <Store />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;

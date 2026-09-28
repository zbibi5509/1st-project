import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      {/* NAVBAR */}
      <Navbar cart={cart} />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
            />
          }
        />

        {/* ORDER SUCCESS */}
        <Route
          path="/order-success"
          element={
            <OrderSuccess />
          }
        />

      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App




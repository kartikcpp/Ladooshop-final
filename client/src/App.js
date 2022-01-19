import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { app } from "./firebase-config";
function App() {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="products/:cat" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route
            path="login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

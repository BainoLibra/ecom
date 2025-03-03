import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, Shop, Cart, Checkout, Dashboard, AdminPanel, UserDashboard, ProductDetails, SearchFilter, Login, Register, PasswordReset } from "./components";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchFilter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

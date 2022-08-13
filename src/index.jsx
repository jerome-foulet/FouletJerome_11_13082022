import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Error";

import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const App = () => {

  const theme = {
    colors: {
     bg: "#000",
   },
 }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// A Layout component that wraps the Header and Footer components around the main content.
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
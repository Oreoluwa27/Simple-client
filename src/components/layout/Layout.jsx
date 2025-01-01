import React from "react";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const BackgroundColor = createGlobalStyle`
body{
  background-color: #c5c6c7 
}

`;

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <Container className="mb-5 mt-5">
        <BackgroundColor />
        <ToastContainer />
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;

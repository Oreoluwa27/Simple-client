import React from "react";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";

import NavigationBar from "./NavigationBar";

const BackgroundColor = createGlobalStyle`
body{
  background-color: #ffffff
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
    </>
  );
}

export default Layout;

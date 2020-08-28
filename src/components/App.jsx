import React from "react";
import { Provider } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Main from "./Main";
import PreFooter from "./PreFooter";
import Footer from "./Footer";

import store from "../store";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <PreFooter />
      <Footer />
    </React.Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Main from "./Main";
import PreFooter from "./PreFooter";
import Footer from "./Footer";

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

import React, { useState } from "react";
import { makeStyles, useTheme, lighten } from "@material-ui/core/styles";

import Hero from "./MainHero";
import Content from "./MainContent";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },

  // Content
}));
export default function Main() {
  const styles = useStyles();

  return (
    <main className={styles.root}>
      <Hero />
      <Content />
    </main>
  );
}

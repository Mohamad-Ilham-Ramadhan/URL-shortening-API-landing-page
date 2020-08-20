import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Main from "./Main";

const useStyles = makeStyles((theme) => ({
  cyan: {
    backgroundColor: theme.palette.primary.main,
    height: 100,
  },
  darkViolet: {
    backgroundColor: theme.palette.primary.darkViolet,
    height: 100,
  },
  red: {
    backgroundColor: theme.palette.secondary.main,
    height: 100,
  },
  gray: {
    backgroundColor: theme.palette.neutral.gray,
    height: 100,
  },
  grayishViolet: {
    backgroundColor: theme.palette.neutral.grayishViolet,
    height: 100,
  },
  veryDarkBlue: {
    backgroundColor: theme.palette.neutral.veryDarkBlue,
    height: 100,
  },
  veryDarkViolet: {
    backgroundColor: theme.palette.neutral.veryDarkViolet,
    height: 100,
  },
}));

export default function App() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Main />
      <div className={styles.cyan}>Cyan</div>
      <div className={styles.darkViolet}>Dark violet</div>
      <div className={styles.red}>Red</div>
      <div className={styles.gray}>Gray</div>
      <div className={styles.grayishViolet}>Grayish violet</div>
      <div className={styles.veryDarkBlue}>Very dark blue</div>
      <div className={styles.veryDarkViolet}>Very dark violet</div>
    </React.Fragment>
  );
}

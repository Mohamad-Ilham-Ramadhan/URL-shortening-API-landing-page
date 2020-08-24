import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import bgBoostDesktop from "../images/bg-boost-desktop.svg";
import bgBoostMobile from "../images/bg-boost-mobile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url("${bgBoostMobile}")`,
    backgroundColor: theme.palette.primary.darkViolet,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: [94, 16],
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url("${bgBoostDesktop}")`,
    },
  },
  h2: {
    color: "white",
    marginBottom: 20,
  },
  button: {
    padding: [10, 40],
    "& span": {
      fontSize: "1.25rem",
    },
  },
}));

export default function PreFooter() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Typography className={styles.h2} variant="h2">
        Boost your links today
      </Typography>
      <Button
        className={clsx(styles.button, "pill")}
        variant="contained"
        color="primary"
        disableElevation
      >
        Get Started
      </Button>
    </section>
  );
}

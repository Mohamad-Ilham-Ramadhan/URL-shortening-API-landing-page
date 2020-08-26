import React, { useState } from "react";
import { makeStyles, useTheme, lighten } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";

import illustration from "../images/illustration-working.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    paddingBottom: 165,
    [theme.breakpoints.up("md")]: {
      paddingTop: 56,
      paddingBottom: 132,
    },
  },
  gridCta: {
    order: 2,
    textAlign: "center",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      order: 1,
      textAlign: "left",
      "& .wrapper-cta": {
        transform: "translateY(-24px)",
      },
      "& .MuiTypography-subtitle1": {
        marginBottom: 32,
      },
      "& .MuiTypography-h1": {
        marginBottom: 0,
      },
    },

    "& h1": {
      marginBottom: theme.spacing(2),
    },

    "& button": {
      padding: [10, 40],
      fontSize: "1.15rem",
    },
  },
  gridIllustration: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
  illustration: {
    width: "148%",
    [theme.breakpoints.up("md")]: {
      width: "130%",
      transform: "translateX(88px)",
    },
  },
}));

export default function MainHero() {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Container>
        <Grid container>
          <Grid xs={12} lg={6} className={styles.gridCta} item>
            <div className="wrapper-cta">
              <Typography component="h1" variant="h1">
                More than just shorter links
              </Typography>
              <Typography variant="subtitle1" component="p">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </Typography>
              <Button
                className="pill"
                variant="contained"
                color="primary"
                disableElevation
              >
                Get Started
              </Button>
            </div>
          </Grid>
          <Grid xs={12} lg={6} className={styles.gridIllustration} item>
            <img
              className={styles.illustration}
              src={illustration}
              role="presentation"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

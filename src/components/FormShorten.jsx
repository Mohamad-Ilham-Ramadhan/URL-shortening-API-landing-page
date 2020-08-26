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

import Hero from "./MainHero";
import Content from "./MainContent";

// import illustration from "../images/illustration-working.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const useStyles = makeStyles((theme) => ({
  formShorten: {
    padding: theme.spacing(3),
    backgroundImage: `url('${bgShortenMobile}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundColor: theme.palette.primary.darkViolet,
    textAlign: "center",
    transform: "translateY(-50%)",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url('${bgShortenDesktop}')`,
      marginBottom: 8,
      padding: [48, 62],
    },
  },
  inputShorten: {
    width: "100%",
    "& .MuiInputBase-root": {
      color: "#232127",
      padding: [14.5, 16],
      background: "white",
      borderRadius: 6,
      fontSize: "1rem",
      lineHeight: 1.75,
      "&.validate": {
        border: `${theme.palette.secondary.main} solid 3px`,
        padding: [11.5, 16],
        "& input::placeholder": {
          color: theme.palette.secondary.main,
        },
      },

      "& input": {
        padding: 0,

        "&::placeholder": {
          fontSize: "1rem",
        },
      },
    },
    "& .MuiTypography-root": {
      color: theme.palette.secondary.main,
      textAlign: "left",
      fontStyle: "italic",
      fontSize: "0.75rem",
      marginTop: 5,
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  buttonShorten: {
    padding: 11,
    borderRadius: 6,

    "& span": {
      fontSize: "1.1rem",
      lineHeight: "normal",
    },
  },
}));

export default function FormShorten({
  link,
  onChange,
  validate,
  onClickShorten,
}) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Paper className={styles.formShorten} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <FormControl className={styles.inputShorten}>
              <InputBase
                value={link}
                onChange={onChange}
                placeholder="Shorten a link here..."
                className={validate ? "validate" : null}
              />
              {validate && <Typography>Please add a link</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              onClick={onClickShorten}
              className={styles.buttonShorten}
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
            >
              Shorten It!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

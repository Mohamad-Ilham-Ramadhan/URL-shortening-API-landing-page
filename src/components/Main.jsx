import React, { useState } from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";

import illustration from "../images/illustration-working.svg";
import bgShorten from "../images/bg-shorten-mobile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  hero: {
    overflow: "hidden",
    paddingBottom: 165,
  },
  gridCta: {
    order: 2,
    textAlign: "center",
    paddingTop: theme.spacing(3),

    "& h1": {
      fontSize: "2.65rem",
      fontWeight: 700,
      marginBottom: theme.spacing(2),
    },
    "& p": {
      fontSize: "1.15rem",
      marginBottom: theme.spacing(3),
    },
    "& button": {
      padding: [10, 40],
      fontSize: "1.15rem",
    },
  },
  gridIllustration: {
    order: 1,
  },
  illustration: {
    width: "148%",
  },
  // Content
  content: {
    backgroundColor: lighten(theme.palette.neutral.grayishViolet, 0.825),
  },
  formShorten: {
    padding: theme.spacing(3),
    backgroundImage: `url('${bgShorten}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundColor: theme.palette.primary.darkViolet,
    textAlign: "center",
    transform: "translateY(-50%)",
  },
  inputShorten: {
    marginBottom: 16,
    "& .MuiInputBase-root": {
      color: "#232127",
      padding: [14.5, 16],
      background: "white",
      borderRadius: 6,
      fontSize: "1rem",
      lineHeight: 1.75,
      "&.validate": {
        border: `${theme.palette.secondary.main} solid 3px`,
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
export default function Main() {
  const styles = useStyles();
  const [link, setLink] = useState("");
  const [validate, setValidate] = useState(false);

  function onChange(e) {
    setLink(e.target.value);
  }
  function onClick(e) {
    if (link.length == 0) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }
  return (
    <main className={styles.root}>
      <section className={styles.hero}>
        <Container>
          <Grid container>
            <Grid xs={12} className={styles.gridCta} item>
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
            </Grid>
            <Grid xs={12} className={styles.gridIllustration} item>
              <img
                className={styles.illustration}
                src={illustration}
                role="presentation"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={styles.content}>
        <Container>
          <Paper className={styles.formShorten} disableElevation>
            <FormControl className={styles.inputShorten}>
              <InputBase
                value={link}
                onChange={onChange}
                placeholder="Shorten a link here..."
                className={validate ? "validate" : null}
              />
              {validate && <Typography>Please add a link</Typography>}
            </FormControl>
            <Button
              onClick={onClick}
              className={styles.buttonShorten}
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
            >
              Shorten It!
            </Button>
          </Paper>
        </Container>
      </section>
    </main>
  );
}

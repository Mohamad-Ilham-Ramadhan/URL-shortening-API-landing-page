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

import illustration from "../images/illustration-working.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";

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
    backgroundImage: `url('${bgShortenMobile}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundColor: theme.palette.primary.darkViolet,
    textAlign: "center",
    transform: "translateY(-50%)",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url('${bgShortenDesktop}')`,
    },
  },
  inputShorten: {
    marginBottom: 16,
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
  PaperShortenedLink: {
    borderRadius: 6,
    marginBottom: 16,
    "& p.MuiTypography-root": {
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.2rem",
      },
    },
  },
  gridShortenedLinkOriginal: {
    padding: [14, 16],
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
    },
  },
  gridShortenedLinkShortened: {
    padding: [14, 16],
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    "& p.MuiTypography-root": {
      marginBottom: 12,
      [theme.breakpoints.up("lg")]: {
        marginBottom: 0,
        marginRight: 24,
        display: "inline-flex",
        alignItems: "center",
      },
    },
    "& .MuiButton-root": {
      fontSize: "1rem",
      [theme.breakpoints.up("lg")]: {
        fontSize: ".9rem",
        padding: [7, 16],
        minWidth: "6.5rem",
      },
      "&.copied": {
        backgroundColor: theme.palette.primary.darkViolet,
      },
    },
  },
}));
export default function Main() {
  const styles = useStyles();
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [link, setLink] = useState("");
  const [validate, setValidate] = useState(false);
  const [copied, setCopied] = useState(false);

  function onChange(e) {
    setLink(e.target.value);
  }
  function onClickShorten() {
    if (link.length == 0) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }
  function onClickCopy() {
    setCopied(true);
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
          <Paper className={styles.PaperShortenedLink} elevation={0}>
            <Grid container>
              <Grid
                className={styles.gridShortenedLinkOriginal}
                item
                xs={12}
                lg
              >
                <Typography>https://www.frontendmentor.io</Typography>
              </Grid>
              {upLg ? null : <Divider fullWidth />}
              <Grid
                className={styles.gridShortenedLinkShortened}
                item
                xs={12}
                lg
              >
                <Typography>
                  <Link href="https://rel.ink/kzw08n">
                    https://rel.ink/kzw08n
                  </Link>
                </Typography>
                <Button
                  className={copied ? "copied" : null}
                  onClick={onClickCopy}
                  variant="contained"
                  color="primary"
                  disableElevation
                  fullWidth={upLg ? false : true}
                >
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </section>
    </main>
  );
}

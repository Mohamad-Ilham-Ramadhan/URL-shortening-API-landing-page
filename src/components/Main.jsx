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
    backgroundColor: lighten(theme.palette.neutral.grayishViolet, 0.875),
    textAlign: "center",
    paddingBottom: 80,
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
  listShortenedLink: {
    padding: 0,
    margin: 0,
    transform: "translateY(-54px)",
  },
  paperShortenedLink: {
    borderRadius: 6,
    marginBottom: 24,
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
      textAlign: "left",
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
  title: {
    marginTop: 36,
    marginBottom: 56,
    marginRight: "auto",
    marginLeft: "auto",
    "& h2": {
      marginBottom: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
  },
  gridContainerCards: {
    marginTop: 72,
    [theme.breakpoints.up("md")]: {
      "& .MuiPaper-root": {
        textAlign: "left",
      },
      "& .connector": {
        top: "50%",
        left: "unset !important",
        right: "-20%",
        width: "100px !important",
        bottom: "unset !important",
        height: "10px !important",
        transform: "unset !important",
      },
      "& .MuiGrid-item:nth-child(2)": {
        "& .MuiPaper-root": {
          marginTop: 44,
        },
      },
      "& .MuiGrid-item:nth-child(3)": {
        "& .MuiPaper-root": {
          marginTop: 88,
        },
      },
    },
    "& .connector": {
      zIndex: -1,
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
      bottom: -82,
      left: "50%",
      transform: "translateX(-50%)",
      width: 8,
      height: 100,
    },
    "& .MuiPaper-root": {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      marginTop: 80,
    },
    "& .MuiGrid-item:first-child": {
      "& .MuiPaper-root": {
        marginTop: 0,
      },
    },

    "& .MuiContainer-root": {
      backgroundColor: "white",
      borderRadius: 8,
      padding: {
        top: 0,
        right: 32,
        left: 32,
        bottom: 40,
      },
    },
    "& .MuiAvatar-root": {
      width: 88,
      height: 88,
      padding: 24,
      marginBottom: -8,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: theme.palette.primary.darkViolet,
      transform: "translateY(-44px)",
    },
    "& h3": {
      marginBottom: 16,
    },
    "& p": {},
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
          <ul className={styles.listShortenedLink}>
            <Paper className={styles.paperShortenedLink} elevation={0}>
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
            <Paper className={styles.paperShortenedLink} elevation={0}>
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
          </ul>

          <div className={styles.title}>
            <Typography className={styles.h2} variant="h2">
              Advanced Statistics
            </Typography>
            <Typography variant="subtitle2">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </Typography>
          </div>
          <Grid className={styles.gridContainerCards} container spacing={3}>
            <Grid item md={4}>
              <Paper className={styles.card} elevation={0}>
                <Container>
                  <Avatar
                    src={iconBrandRecognition}
                    imgProps={{ role: "presentation" }}
                  />
                  <Typography variant="h3">Brand Recognition</Typography>
                  <Typography variant="body1">
                    Boost your brand recognition with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in
                    your content.
                  </Typography>
                </Container>
                <div className="connector"></div>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper className={styles.card} elevation={0}>
                <Container>
                  <Avatar
                    src={iconDetailedRecords}
                    imgProps={{ role: "presentation" }}
                  />
                  <Typography variant="h3">Detailed Records</Typography>
                  <Typography variant="body1">
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better
                  </Typography>
                </Container>
                <div className="connector"></div>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper className={styles.card} elevation={0}>
                <Container>
                  <Avatar
                    src={iconFullyCustomizable}
                    imgProps={{ role: "presentation" }}
                  />
                  <Typography variant="h3">Fully Customizable</Typography>
                  <Typography variant="body1">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </Typography>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}

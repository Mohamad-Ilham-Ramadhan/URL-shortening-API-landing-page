import React from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: lighten(theme.palette.neutral.grayishViolet, 0.875),
    textAlign: "center",
    paddingBottom: 80,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 110,
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
      marginTop: 0,
      marginBottom: 64,
    },
  },
  gridContainerCards: {
    marginTop: 72,
    [theme.breakpoints.up("md")]: {
      "& .MuiPaper-root": {
        textAlign: "left !important",
      },
      "& .connector": {
        top: "50%",
        left: "unset !important",
        right: "-20%",
        width: "100px !important",
        bottom: "unset !important",
        height: "10px !important",
        transform: "unset !important",
        [theme.breakpoints.up("md")]: {
          top: "57%",
        },
      },
      "& .MuiGrid-item:nth-child(2)": {
        "& .MuiPaper-root": {
          marginTop: 44,
        },
        "& .connector": {
          [theme.breakpoints.up("md")]: {
            top: "calc(57% - 44px)",
          },
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
      [theme.breakpoints.up("md")]: {
        marginLeft: 0,
      },
    },
    "& h3": {
      marginBottom: 16,
    },
    "& p": {},
  },
}));

export default function MainContent({
  link,
  validate,
  copied,
  onChange,
  onClickShorten,
  onClickCopy,
}) {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <Container>
        <FormShorten
          link={link}
          validate={validate}
          onChange={onChange}
          onClickShorten={onClickShorten}
        />
        <ListShortenedLink copied={copied} onClickCopy={onClickCopy} />

        <div className={styles.title}>
          <Typography className={styles.h2} variant="h2">
            Advanced Statistics
          </Typography>
          <Typography variant="subtitle2">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Typography>
        </div>

        <Grid className={styles.gridContainerCards} container spacing={4}>
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
                  and where people engage with your content helps inform better
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
  );
}

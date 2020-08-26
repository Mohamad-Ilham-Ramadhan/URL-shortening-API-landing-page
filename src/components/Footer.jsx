import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconPinterest from "../icons/IconPinterest";
import IconTwitter from "../icons/IconTwitter";

import logo from "../images/logo-white.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.neutral.veryDarkViolet,
    textAlign: "center",
    padding: [48, 0],
    [theme.breakpoints.up("md")]: {
      padding: {
        top: 70,
        bottom: 30,
        left: 0,
        right: 0,
      },
      textAlign: "left",
    },
  },
  gridLinks: {
    marginBottom: 32,
  },
  logo: {
    display: "inline-block",
    marginBottom: 48,
  },
  icons: {
    display: "inline-block",
    "& svg": {
      color: "white",
      marginRight: 24,
    },
    "&:last-child": {
      "& svg": {
        marginRight: 0,
      },
    },
  },
  linkBold: {
    marginBottom: 20,
    "& a": {
      color: "white",
      fontWeight: 700,
    },
  },
  linkSmall: {
    marginBottom: 8,
    "& a": {
      fontSize: ".95rem",
      color: theme.palette.neutral.gray,
      [theme.breakpoints.up("md")]: {
        fontSize: ".915rem",
      },
    },
  },
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Link className={styles.logo} href="#">
              <img src={logo} alt="Home" />
            </Link>
          </Grid>
          <Grid className={styles.gridLinks} item xs={12} md>
            <Typography className={styles.linkBold}>
              <Link href="#">Features</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Link Shortening </Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Branded Links</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Analitics</Link>
            </Typography>
          </Grid>
          <Grid className={styles.gridLinks} item xs={12} md>
            <Typography className={styles.linkBold}>
              <Link href="#">Resources</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Blog</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Developers</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Support</Link>
            </Typography>
          </Grid>
          <Grid className={styles.gridLinks} item xs={12} md>
            <Typography className={styles.linkBold}>
              <Link href="#">Company</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">About</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Our Team</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Careers</Link>
            </Typography>
            <Typography className={styles.linkSmall}>
              <Link href="#">Contact</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link className={styles.icons} href="#">
              <IconFacebook></IconFacebook>
            </Link>
            <Link className={styles.icons} href="#">
              <IconTwitter></IconTwitter>
            </Link>
            <Link className={styles.icons} href="#">
              <IconPinterest></IconPinterest>
            </Link>
            <Link className={styles.icons} href="#">
              <IconInstagram></IconInstagram>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

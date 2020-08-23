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
    padding: [70, 0],
  },
  icons: {
    color: "white",
    marginRight: 24,
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
      color: theme.palette.neutral.gray,
      fontSize: ".915rem",
    },
  },
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.root}>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Link href="#">
              <img src={logo} alt="Home" />
            </Link>
          </Grid>
          <Grid item xs>
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
          <Grid item xs>
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
          <Grid item xs>
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
          <Grid item xs={3}>
            <Link href="#">
              <IconFacebook className={styles.icons}></IconFacebook>
            </Link>
            <Link href="#">
              <IconTwitter className={styles.icons}></IconTwitter>
            </Link>
            <Link href="#"></Link>
            <Link href="#">
              <IconPinterest className={styles.icons}></IconPinterest>
            </Link>
            <Link href="#">
              <IconInstagram className={styles.icons}></IconInstagram>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

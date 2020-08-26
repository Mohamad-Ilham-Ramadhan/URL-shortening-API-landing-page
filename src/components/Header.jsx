import React, { useState, useEffect } from "react";
import { makeStyles, useTheme, darken } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    backgroundColor: "white",

    "& .MuiToolbar-gutters": {
      padding: {
        left: theme.spacing(3),
        right: theme.spacing(3),
      },
    },
  },
  logo: {
    "& img": {
      verticalAlign: "middle",
    },
  },

  burger: {
    paddingRight: 0,
    marginLeft: "auto",

    "&:hover": {
      backgroundColor: "unset",
    },
    "& svg": {
      fontSize: 38,
      color: darken(theme.palette.neutral.grayishViolet, 0.15),
    },
  },
  navigation: {
    marginLeft: 32,
    "& .MuiLink-root": {
      color: theme.palette.neutral.grayishViolet,
      fontSize: ".925rem",
      fontWeight: 700,
      padding: [0, 16],

      "&:hover": {
        textDecoration: "none",
        color: theme.palette.neutral.veryDarkViolet,
      },
    },
  },
  authentication: {
    marginLeft: "auto",
    "& .MuiLink-root": {
      color: theme.palette.neutral.grayishViolet,
      fontSize: ".925rem",
      fontWeight: 700,
      paddingRight: 32,
      "&:hover": {
        textDecoration: "none",
        color: theme.palette.neutral.veryDarkViolet,
      },
    },
    "& .MuiButton-root": {
      padding: [8, 24],
    },
  },
  mobileMenu: {
    position: "absolute",

    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.darkViolet,
      textAlign: "center",
      padding: [24, 24],
    },
    "& .MuiDivider-root": {
      backgroundColor: "rgba(158, 154, 167, 0.25)",
      margin: [16, 0],
    },
    "& .MuiLink-root": {
      display: "block",
      fontSize: 18,
      fontWeight: 700,
      color: "white",
      padding: [16, 0],
    },
    "& .MuiButton-root": {
      fontSize: 18,
      padding: [8, 16],
      margin: [16, 0],
    },
  },
}));

export default function Header() {
  const styles = useStyles();
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((show) => !show);
  }
  return (
    <header>
      <AppBar className={styles.root} position="static" elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Link className={styles.logo} href="#">
              <img src={logo} role="navigation" />
            </Link>
            {upMd ? (
              <React.Fragment>
                <nav className={styles.navigation}>
                  <Link href="#">Features</Link>
                  <Link href="#">Pricing</Link>
                  <Link href="#">Resources</Link>
                </nav>
                <nav className={styles.authentication}>
                  <Link href="#">Login</Link>
                  <Button
                    className="pill"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Sign Up
                  </Button>
                </nav>
              </React.Fragment>
            ) : (
              <IconButton
                className={styles.burger}
                disableRipple
                onClick={handleClick}
              >
                {show ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {show && (
        <Container className={styles.mobileMenu} role="navigation">
          <Paper elevation={0}>
            <Typography>
              <Link href="#">Features</Link>
            </Typography>
            <Typography>
              <Link href="#">Pricing</Link>
            </Typography>
            <Typography>
              <Link href="#">Resources</Link>
            </Typography>
            <Divider />
            <Typography>
              <Link href="#">Login</Link>
            </Typography>
            <Button
              className="pill"
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
            >
              Sign Up
            </Button>
          </Paper>
        </Container>
      )}
    </header>
  );
}

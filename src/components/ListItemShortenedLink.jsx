import React, { useState, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
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
}));
export default function ListItemShortenedLink({ original, shortened }) {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const styles = useStyles();
  const [copied, setCopied] = useState(false);

  function onClickCopy(text) {
    return function () {
      navigator.clipboard.writeText(text).then(function () {
        setCopied(true);
      });
    };
  }
  return (
    <Paper className={styles.paperShortenedLink} elevation={0}>
      <Grid container>
        <Grid className={styles.gridShortenedLinkOriginal} item xs={12} lg>
          <Typography>{original}</Typography>
        </Grid>
        {upLg ? null : <Divider fullWidth />}
        <Grid className={styles.gridShortenedLinkShortened} item xs={12} lg>
          <Typography>
            <Link href={shortened}>{shortened}</Link>
          </Typography>
          <Button
            className={copied ? "copied" : null}
            onClick={onClickCopy(shortened)}
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
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import illustration from "../images/illustration-working.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  hero: {
    overflow: "hidden",
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
  content: {},
}));
export default function Main() {
  const styles = useStyles();
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
      <section className={styles.content}></section>
    </main>
  );
}

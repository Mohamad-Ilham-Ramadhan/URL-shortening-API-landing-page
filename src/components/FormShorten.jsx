import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";

import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";

import addLink from "../actions/addLink";
import onChange from "../actions/onChange";

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
      backgroundSize: "cover",

      marginBottom: 8,
      padding: [48, 62],
    },
  },
  inputShorten: {
    position: "relative",
    width: "100%",
    "& .MuiInputBase-root": {
      color: "#232127",
      padding: [14.5, 16],
      background: "white",
      borderRadius: 6,
      fontSize: "1rem",
      lineHeight: 1.75,
      [theme.breakpoints.up("md")]: {
        padding: [16, 32],
      },
      "&.validate": {
        border: `${theme.palette.secondary.main} solid 3px`,
        padding: [11.5, 16],
        [theme.breakpoints.up("md")]: {
          padding: [13, 32],
        },
        "& input::placeholder": {
          color: theme.palette.secondary.main,
        },
      },

      "& input": {
        padding: 0,
        [theme.breakpoints.up("md")]: {
          fontSize: "1.3rem",
          lineHeight: "normal",
          height: "unset",
        },

        "&::placeholder": {
          fontSize: "1rem",
          [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem",
          },
        },
      },
    },
    "& .MuiTypography-root": {
      // validation message
      color: fade(theme.palette.secondary.main, 0.85),
      textAlign: "left",
      fontStyle: "italic",
      fontSize: "0.75rem",
      marginTop: 5,
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: -30,
        fontSize: "0.9rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  buttonShorten: {
    padding: 11,
    borderRadius: 6,
    [theme.breakpoints.up("md")]: {
      padding: [16, 0],
    },
    "& span": {
      fontSize: "1.1rem",
      lineHeight: "normal",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.3rem",
      },
    },
  },
}));

function FormShorten({ input, onChange, validate, addLink }) {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Paper className={styles.formShorten} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <FormControl className={styles.inputShorten}>
              <InputBase
                value={input}
                onChange={onChange}
                placeholder="Shorten a link here..."
                className={validate ? "validate" : null}
              />
              {validate && <Typography>Please add a link</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              onClick={() => addLink(input)}
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

const mapState = (state) => {
  return {
    validate: state.validate,
    input: state.input,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addLink: (original) => dispatch(addLink(original)),
    onChange: (e) => {
      dispatch(onChange(e));
    },
  };
};

export default connect(mapState, mapDispatch)(FormShorten);

import React from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconErrorOutline from "@material-ui/icons/ErrorOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

import closeDialog from "../actions/closeDialog";

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    "& .MuiPaper-root.MuiDialog-paper": {
      backgroundColor: theme.palette.secondary.main,
    },
    "& .MuiTypography-root.MuiDialogContentText-root": {
      color: "white",
    },
    "& .MuiDialogTitle-root h2": {
      textAlign: "center",
      color: "white",
      fontSize: "0.25rem",

      "& .MuiSvgIcon-root": {
        fontSize: "3rem",
      },
    },
  },
  loading: {
    transform: "translateY(-67px)",
  },
}));

function ContainerShorten({
  listLink,
  loadingRedux,
  errorDialog,
  closeDialog,
}) {
  const styles = useStyles();
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <FormShorten />
      {loadingRedux && (
        <div className={styles.loading}>
          <CircularProgress color="primary" size={upMd ? 62 : 40} />
        </div>
      )}
      <ListShortenedLink />
      <Dialog
        open={errorDialog}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.errorMessage}
      >
        <DialogTitle id="alert-dialog-title">
          <IconErrorOutline />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Shorthen link failed!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

function mapState(state) {
  return {
    listLink: state.links,
    loadingRedux: state.loading,
    errorDialog: state.errorDialog,
  };
}

function mapDispatch(dispatch) {
  return {
    closeDialog: () => dispatch(closeDialog()),
  };
}

export default connect(mapState, mapDispatch)(ContainerShorten);

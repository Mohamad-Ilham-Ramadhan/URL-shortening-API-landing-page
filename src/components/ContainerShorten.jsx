import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconErrorOutline from "@material-ui/icons/ErrorOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

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

export default function ContainerShorten() {
  const [validate, setValidate] = useState(false);
  const [value, setValue] = useState("");
  const [links, setLinks] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const styles = useStyles();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("links")) != null) {
      setLinks(JSON.parse(localStorage.getItem("links")));
    }
  }, []);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onClickShortenIt(input) {
    return function () {
      if (input.length == 0) {
        setValidate(true);
      } else {
        setLoading(true);
        axios
          .post("https://rel.ink/api/links/", {
            url: input,
          })
          .then((response) => {
            setLoading(false);
            setLinks((links) => [
              ...links,
              {
                id: response.data.hashid,
                original: input,
                shortened: `https://rel.ink/${response.data.hashid}`,
                copied: false,
              },
            ]);
            localStorage.setItem(
              "links",
              JSON.stringify([
                ...links,
                {
                  id: response.data.hashid,
                  original: input,
                  shortened: `https://rel.ink/${response.data.hashid}`,
                  copied: false,
                },
              ])
            );
          })
          .catch((response) => {
            setLoading(false);

            setShowError(true);
          });

        setValidate(false);
        setValue("");
      }
    };
  }

  function onClickCopy(shortened) {
    return function () {
      navigator.clipboard.writeText(shortened).then(function () {
        setLinks((links) =>
          links.map((link) =>
            link.shortened == shortened
              ? { ...link, copied: true }
              : { ...link, copied: false }
          )
        );
      });
    };
  }
  function handleClose() {
    setShowError(false);
  }
  return (
    <>
      <FormShorten
        value={value}
        onChange={onChange}
        onClickShortenIt={onClickShortenIt}
        validate={validate}
      />
      {loading && (
        <div className={styles.loading}>
          <CircularProgress color="primary" />
        </div>
      )}
      <ListShortenedLink links={links} onClickCopy={onClickCopy} />
      <Dialog
        open={showError}
        onClose={handleClose}
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

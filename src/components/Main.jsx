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

import Hero from "./MainHero";
import Content from "./MainContent";

// import illustration from "../images/illustration-working.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import iconBrandRecognition from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },

  // Content
}));
export default function Main() {
  const styles = useStyles();
  const theme = useTheme();
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
      <Hero />
      <Content
        link={link}
        validate={validate}
        copied={copied}
        onChange={onChange}
        onClickShorten={onClickShorten}
        onClickCopy={onClickCopy}
      />
    </main>
  );
}

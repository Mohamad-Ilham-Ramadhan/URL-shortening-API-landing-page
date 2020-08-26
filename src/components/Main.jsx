import React, { useState } from "react";
import { makeStyles, useTheme, lighten } from "@material-ui/core/styles";

import Hero from "./MainHero";
import Content from "./MainContent";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },

  // Content
}));
export default function Main() {
  const styles = useStyles();
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

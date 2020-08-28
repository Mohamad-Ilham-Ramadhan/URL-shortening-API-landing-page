import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import ListItem from "./ListItemShortenedLink";

import retrieveLinks from "../actions/retrieveLinks";

const useStyles = makeStyles((theme) => ({
  listShortenedLink: {
    padding: 0,
    margin: 0,
    transform: "translateY(-54px)",
    [theme.breakpoints.up("md")]: {
      marginBottom: 56,
    },
  },
}));

function ListShortenedLink({ links, retrieveLinks, onClickCopy }) {
  const styles = useStyles();
  useEffect(() => {
    retrieveLinks();
  }, []);

  function copyToClipboard(text) {
    return function () {
      navigator.clipboard.writeText(text).then(function () {
        alert("copied!");
      });
    };
  }
  return (
    <ul className={styles.listShortenedLink}>
      {links.map((link) => (
        <ListItem
          key={link.id}
          original={link.original}
          shortened={link.shortened}
          copied={link.copied}
          onClickCopy={onClickCopy}
        />
      ))}
    </ul>
  );
}

function mapState(state) {
  return {
    links: state.links,
  };
}
function mapDispatch(dispatch) {
  return {
    retrieveLinks: () => dispatch(retrieveLinks()),
  };
}

export default connect(mapState, mapDispatch)(ListShortenedLink);

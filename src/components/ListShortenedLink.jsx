import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

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

function ListShortenedLink({ links, retrieveLinks }) {
  const styles = useStyles();
  useEffect(() => {
    retrieveLinks();
  }, []);

  return (
    <ul className={styles.listShortenedLink}>
      {links.map((link) => (
        <ListItem
          key={link.id}
          original={link.original}
          shortened={link.shortened}
          copied={link.copied}
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

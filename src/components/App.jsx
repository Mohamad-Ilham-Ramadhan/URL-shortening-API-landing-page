import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: [12, 45, 33, 53],
    margin: {
      top: 23,
      bottom: 33,
    },
  },
}));

export default function App() {
  const styles = useStyles();
  return <div className={styles.root}>Mohamad Ilham Ramadhan</div>;
}

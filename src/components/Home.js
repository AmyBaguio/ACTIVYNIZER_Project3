import React from "react";
// import Col from "./Col";
// import Row from "./Row";
// import Container from "./Container";
import { Button } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "skyblue",
  },
  img: {
    width: "100%",
  },
  button1: {
    textAlign: "center",
  },
  button2: {
    textAlign: "center",
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <img
            className={classes.img}
            alt="complex"
            src="./image/logging.jpg"
          />
        </Grid>
        <Grid item xs={3}>
          <div className={classes.button1}>
            <Button variant="primary" size="lg">
              Sign In
            </Button>
          </div>
          <div className={classes.button2}>
            <Button variant="warning" size="lg">
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

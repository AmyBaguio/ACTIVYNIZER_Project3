import React from "react";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "cyan",

    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  button1: {
    marginTop: "20rem",
    margin: "5px",
    textAlign: "center",
    flexDirection: "center",
  },
  button2: {
    margin: "5px",
    textAlign: "center",
    flexDirection: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <img
            className={classes.img}
            alt="complex"
            src="./image/logging.jpg"
          />
        </Grid>
        <Grid item xs={2}>
          <div>
            <Button className={classes.button1} variant="primary" size="lg">
              Sign In
            </Button>
          </div>
          <div>
            <Button className={classes.button2} variant="warning" size="lg">
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
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
            <Button
              variant="contained"
              justifyContent="center"
              size="large"
              color="Primary"
              position="relative"
              styles={{
                fontSize: 30,
              }}
            >
              Sign In
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="Secondary"
              position="relative"
              styles={{
                fontSize: 30,
              }}
            >
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

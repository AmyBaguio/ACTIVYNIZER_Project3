import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  paper: {
    display: "flex-inline",
    margin: "2rem",
    marginTop: "500px",
    padding: "2rem",
    backgroundColor: "yellow",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Paper>
            <img
              className={classes.img}
              alt="complex"
              src="./image/logging.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <div>
              <Button
                variant="contained"
                size="large"
                color="primary"
                position="relative"
                marginBottom="5rem"
                fullWidth={true}
                borderRadius="2rem"
                marginBottom="2rem"
              >
                Sign In
              </Button>
            
              <Button
                variant="contained"
                size="large"
                color="yellow"
                position="relative"
                fullWidth={true}
                borderRadius="2rem"
                marginTop="2rem"
              >
                Sign Up
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

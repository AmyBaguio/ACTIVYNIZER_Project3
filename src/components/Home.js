import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import { Button }   from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#0077c2"
  },
  img: {
    width: "100%",
    height: "100%",
  },
  paper: {
   
    margin: "1rem",
    padding: "3rem",
    marginTop: "500px",
    justifyContent: "center",
    backgroundColor:  "#03a9f4"
  
  },
  buttonOne: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: "15px"
  },
  buttonTwo: {
    background: theme.palette.main,
    color: theme.palette.contrastText,
    margin: "15px"
  }
}));

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Paper>
            <img
              className={styles.img}
              alt="complex"
              src="./image/logging.jpg"
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={styles.paper}>
            <div>
              <Button className={styles.buttonOne}
                variant="contained"
                size="large"
                color="primary"
                fullWidth={true}    
              >
                Sign In
              </Button>
              <Button className={styles.buttonTwo}
                variant="contained"
                size="large"
                fullWidth={true}
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

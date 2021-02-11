import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import { Button }   from "@material-ui/core";

import { Grid, TextField } from "@material-ui/core";

import firebase from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#0077c2",
  },
  img: {
    width: "100%",
    height: "50%",
  },
  paper: {
    margin: "1rem",
    padding: "3rem",
    marginTop: "300px",
    justifyContent: "center",
    backgroundColor: "#03a9f4",
  },
  buttonOne: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: "15px",
  },
  buttonTwo: {
    margin: "15px",
  },
}));

export default function Home() {
  const styles = useStyles();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function handleSignIn() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Signed in user with email ${user.email}!`)
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  function handleSignUp() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
       alert(`Created user with email ${user.email}!`)
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  function handleSignOut() {
    firebase.auth()
      .signOut()
      .then(() => {
       alert("Signed out!")
      })
      .catch((error) => {
        alert(error.message)
      });
  }
  
  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Paper>
            <img className={styles.img} alt="diary" src="./image/logging.jpg" />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={styles.paper}>
            <form noValidate autoComplete="off">
              <TextField
                id="text-email"
                label="email"
                variant="filled"
                type="email"
                inputRef={emailRef}
              />
              <TextField
                id="text-password"
                label="password"
                variant="filled"
                type="password"
                inputRef={passwordRef}
              />
              
            </form>
            <div>
              <Button
                className={styles.buttonOne}
                variant="contained"
                size="large"
                color="primary"
                fullWidth={true}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button
                className={styles.buttonTwo}
                variant="contained"
                size="large"
                fullWidth={true}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
              
              <Button
                className={styles.buttonTwo}
                variant="contained"
                size="large"
                fullWidth={true}
                color="secondary"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

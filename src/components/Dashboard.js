import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0077c2"
   
  },
  card: {
    marginTop: "15rem",
    marginBottom: "20rem",
    width: "20%",
    borderRadius: "20px",
    color: "black",
    margin: "20px",
    padding: "40px",
    backgroundColor: "#80d6ff"
  },
  img: {
    
  }
});

export default function Dashboard() {
  const classes = useStyles();

  const [calendarState, setDeveloperState] = useState([
    {
      happeningToday: "Vincent's basketball game",
      date: "Feb 3, 2021",
      time: 1600,
    },
    {
      happeningToday: "Prince Dentist Appointment",
      date: "Feb 16, 2021",
      time: 1300,
    },
    {
      happeningToday: "Vince Choir practice",
      date: "Feb 23, 2021",
      time: 1900,
    },
    {
      happeningToday: "Amy's Catch up with the ladies",
      date: "Feb 10, 2021",
      time: 1100,
    },
  ]);
  return (
    
    <div className={classes.root}>
      <div className="center">
        <h1
          style={{
            fontFamily: "uiSansSerif",
            fontSize: "4rem",
          }}
        >
          DASHBOARD
        </h1>
      </div>   
      <div
        className="cardArea"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {calendarState.map((item) => (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                justifyContent="center"
              >
                Todays Event: <br /> {item.happeningToday}
              </Typography>
              <Typography variant="h5">
                Date: {item.date}
                <br />
                Time: {item.time}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
    </div>
  );
}

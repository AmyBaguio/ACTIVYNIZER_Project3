
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    
    justifyContent: "center",
    display: "flex",
    height: "400px",
    margin: "100px",
    lineHeight: "2rem"
  },
  card: {
    backgroundColor: "cyan",
    
    height: "100%",
    width: "100%",
    borderRadius: "20px",
    color: "black",
    margin: "10px",
    padding: "10px"
  },
});

export default function Dashboard() {
  const classes = useStyles();

  const [calendarState, setDeveloperState] = useState([
    {
      happeningToday: "Vincent basketball game",
      date: "Feb 3, 2021",
      time: 1600,
    },
    {
      happeningToday: "Dentist Appointment",
      date: "Feb 6, 2021",
      time: 1600,
    },
    {
      happeningToday: "Vincent basketball game",
      date: "Feb 3, 2021",
      time: 1600,
    },
    {
      happeningToday: "Vincent basketball game",
      date: "Feb 3, 2021",
      time: 1600,
    },
  ]);
  return (
   <div className="title" style={{
     textAlign: "center",
     fontFamily: "SansSerif"
   }}>
     <h1>DASHBOARD</h1>
   
    <div className={classes.root}>
      {calendarState.map((item) => (
        
        <Card className={classes.card}>
          <CardContent >
            <Typography gutterBottom variant="h4" component="h2" justifyContent="center">
              Todays Event: <br/> {item.happeningToday}
            </Typography>
            <Typography variant="h5" >
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

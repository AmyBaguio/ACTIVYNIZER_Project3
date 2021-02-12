import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cal: {
    width: "1000px",
    height: "600px",
   
    marginLeft: "850px",
    backgroundColor: "#80d6ff" 
  },
});

const ReactCalendar = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <div className="center"style={{
          fontFamily: "ui-sans-serif",
          color: "black",
          
          backgroundColor: "#0077c2"
        }}>
      <h1 className="calName" style={{
         fontSize: "5rem",
      }}
      >
        CALENDAR
      </h1>
      </div>

      <Container
        fluid
        style={{
          textAlign: "center",
          fontSize: "30px",
          display: "flex",
          backgroundColor: "#0077c2"
        }}
      >
        <Calendar className={classes.cal} onChange={onChange} value={date} />
      </Container>
    </div>
  );
};
export default ReactCalendar;

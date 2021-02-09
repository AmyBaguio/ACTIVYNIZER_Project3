import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cal: {
    width: "1000px",
    height: "600px",
    lineHeight: "5rem",
    marginLeft: "650px",
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
      <h1
        style={{
          fontFamily: "ui-sans-serif",
          fontSize: "4rem",
          color: "black",
          backgroundColor: "yellow",
        }}
      >
        CALENDAR
      </h1>

      <Container
        fluid
        style={{
          textAlign: "center",
          backgroundColor: "blue",
          fontSize: "20px",
          margin: "1rem",
          display: "flex",
        }}
      >
        <Calendar className={classes.cal} onChange={onChange} value={date} />
      </Container>
    </div>
  );
};
export default ReactCalendar;

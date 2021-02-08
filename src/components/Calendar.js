
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
  cal: {
    width: "1000px",
    height: "600px",
    lineHeight: "5rem",
    marginLeft: "200px",
  }
})

const ReactCalendar = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    
      
        <Container fluid style={{
          lineHeight: "15rem",
          textAlign: "center",
          backgroundColor: "cyan",
          fontSize: "20px",
          margin: "70px",
          display: "flex"
          
        }}>
          <Calendar className={classes.cal}
          onChange={onChange} value={date} /> 
     
    </Container>
  );
};
export default ReactCalendar;

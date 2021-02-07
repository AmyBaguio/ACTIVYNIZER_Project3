
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    // <Container fluid style={{ backgroundColor: "cyan" }}>
     
    //     style={{
    //       lineHeight: "150px",
    //       textAlign: "center",
    //       backgroundColor: "skyBlue",
    //       fontFamily: "Arial",
    //       fontSize: "20px",
    //       margin: "70px",
    //     }}
      
        <Container fluid style={{
          
          width: "fit-content",
          height: "100%",
          display: "inline",
          boxSizing: "content-box"
        
        }}>
          <Calendar onChange={onChange} value={date} />
        
     
    </Container>
  );
};
export default ReactCalendar;

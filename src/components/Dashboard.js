import React, { useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

// import API from "../utils/API";

const styles = {
  dashBoardStyle: {
    color: "blue",
    backgroundColor: "cyan",
    fontFamily: "Impact",
    textAlign: "center",
   
  },
  event: {
    fontFamily: "Arial",
    justifyContent: "Center",
  
  }
};



function Dashboard() {
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
    <Container fluid style={styles.dashBoardStyle} className="Dashboard">
      <div>
      <h1>Dashboard</h1>
      </div>
      <div>
      <Card  border="primary" style={{ width: "30rem", display: "inline"}}>  
        {calendarState.map((item) => (  
          <ListGroup style={styles.event} variant="secondary"> 
            <ListGroup.Item>Todays Event: {item.happeningToday}</ListGroup.Item>
            <ListGroup.Item>Date: {item.date}</ListGroup.Item>
            <ListGroup.Item>Time: {item.time}</ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
      </div>
      
    </Container>
  );
}

export default Dashboard;

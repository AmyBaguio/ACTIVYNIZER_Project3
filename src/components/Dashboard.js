import React, { useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

// import API from "../utils/API";

const styles = {
  dashBoardStyle: {
    color: "blue",
    backgroundColor: "skyblue",
    fontFamily: "Impact",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

const eventList = {
  event: {
    fontFamily: "Impact",
    justifyContent: "Center",
  },
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
      <h1>Dashboard</h1>
      <Card border="primary" style={{ width: "30rem" }}>
        {calendarState.map((item) => (
          <ListGroup
            style={eventList.event}
            className="Event"
            variant="primary"
          >
            <ListGroup.Item>Todays Event: {item.happeningToday}</ListGroup.Item>
            <ListGroup.Item>Date: {item.date}</ListGroup.Item>
            <ListGroup.Item>Time: {item.time}</ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </Container>
  );
}

export default Dashboard;

import React, {useState}from "react";
import { Card, ListGroup } from 'react-bootstrap';
// import API from "../utils/API";


function Dashboard() { 
  const [calendarState, setDeveloperState] = useState(
   [ {
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
  }
]);
    return (
     <div>
        
      <h1>Dashboard</h1>

      <Card style={{ width: '18rem' }}>
      {calendarState.map(item => (
       <ListGroup variant="flush">
       <ListGroup.Item>
         Todays Event: {item.happeningToday} 
       </ListGroup.Item> 
       
       <ListGroup.Item>
        Date: {item.date} 
       </ListGroup.Item>
       <ListGroup.Item>
         Time: {item.time}
         </ListGroup.Item>
     </ListGroup> 
        
      ))}
  
</Card>
      
      </div>
    );
    }
  
  export default Dashboard;
import React from "react";
import { Container} from "react-bootstrap";

const styles = {
    calendar: {
        textAlign: "center",
        backgroundColor: "skyblue",
        font: "Impact"
    },
}
function Calendar() {
    return (
        <Container fluid style={styles.calendar} className="calendar">
            <h1 >CALENDAR</h1>
        </Container>
        
    );
}

export default Calendar;
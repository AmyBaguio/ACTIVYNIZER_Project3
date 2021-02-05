import React from "react";
import Col from "./Col";
import Row from "./Row";
import Container from "./Container";
import { Image, Button } from "react-bootstrap";

// const styles = {
//   coverImage: {
//     width: "100%",
//     height: "100%",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
// };
function Home() {
  return (
    <Container>
      <Row>
        <Col size="sm-8">
          <Image src="./image/logging.jpg" />
        </Col>
        <Col size="sm-4">
          <Button variant="primary" size="lg">
            Sign In
          </Button>
          <Button variant="warning" size="lg">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

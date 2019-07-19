import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default () => {
  return (
    <>
      <Accordion
        className=" rounded"
        style={{
          width: "40rem",
          height: "10rem",
          marginLeft: "22rem",
          marginTop: "7rem"
        }}
      >
        <Alert variant="danger" className="shadow-sm rounded">
          <Alert.Heading>
            Oh Snap! We are not able to find the page you were looking for!
          </Alert.Heading>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <Button variant="outline-danger">More Info</Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <hr />
              Maybe you are trying to access URL that does not exist.
            </Card.Body>
          </Accordion.Collapse>
        </Alert>
      </Accordion>
    </>
  );
};

import React from "react";
import Navbar from "./Navbars";
import { Card } from "react-bootstrap";
const Service = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card className="text-center">
          <Card.Header> Success Story </Card.Header>{" "}
          <Card.Body>
            <Card.Title> Placed at Amazone </Card.Title>{" "}
            <Card.Text>
              A Student o Computer Science batch of 2015-2019 is place at
              Amazone as a Software Developer.{" "}
            </Card.Text>{" "}
          </Card.Body>{" "}
          <Card.Footer className="text-muted"> </Card.Footer>{" "}
        </Card>{" "}
        <br />
        <Card className="text-center">
          <Card.Header> Success Story </Card.Header>{" "}
          <Card.Body>
            <Card.Title> Clear APSC</Card.Title>{" "}
            <Card.Text>
              A student of English Department (batch of 2018-2022) has
              successfully clear APSC in rank 15 .
            </Card.Text>{" "}
          </Card.Body>{" "}
          <Card.Footer className="text-muted"> </Card.Footer>{" "}
        </Card>{" "}
      </div>{" "}
    </>
  );
};

export default Service;

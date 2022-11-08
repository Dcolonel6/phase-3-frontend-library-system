import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BooksDetails = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>If Tomorrow Comes</Card.Header>
        <Card.Body>
          <Card.Title>
            By: <span>Sidney Sheldon</span>
          </Card.Title>
          <Card.Text>
            "It is a story portraying an ordinary woman who is framed by the
            Mafia, her subsequent quest for vengeance towards them and her later
            life as a con artist."
          </Card.Text>
          <Button variant="primary">Borrow</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          2 days left to return the book
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BooksDetails;

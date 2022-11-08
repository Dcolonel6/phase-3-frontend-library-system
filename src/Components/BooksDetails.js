import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BooksDetails = () => {
  let { id } = useParams();
  const [book, setBook] = React.useState({});
  console.log(book);

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  };
  return (
    <div className="row align-items-center">
      <Card className="col-md-6 offset-md-3 my-auto" style={{ maxHeight: '28rem' }}>
        <Card.Img
          variant="top"
          src={book.image ? book.image : "../download.svg"}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
          <Button
            variant={book.available ? "primary" : "secondary"}
            disabled={!book.available}
          >
            Borrow
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BooksDetails;

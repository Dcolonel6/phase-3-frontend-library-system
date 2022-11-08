import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {FactoryServerCommunication} from './Utilies/server';

const BooksDetails = () => {
  let { id } = useParams();
  const history = useHistory();
  const [book, setBook] = React.useState({});
  console.log(book);

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    FactoryServerCommunication(`/books/${id}`,"GET")(setBook)
  };
  const deleteBook = (evnt) => {
    FactoryServerCommunication(`/books/${id}`,"Delete")()
    history.push("/books/");
  }
  return (
    <div className="row align-items-center my-3">
      <div className="col-md-6 offset-md-3 my-3 d-flex justify-content-end">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            Edit
          </button>
          <button type="button" className="btn btn-warning" onClick={deleteBook}>
            Delete
          </button>          
        </div>
      </div>
      <div className="card col-md-6 offset-md-3" style={{ width: "49%" }}>
        <img className="card-img-top" src={book.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className={`btn ${
              book.available ? "btn-primary" : "btn-secondary"
            }`}
            disabled={!book.availabe}
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;

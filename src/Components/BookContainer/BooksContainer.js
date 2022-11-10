import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { FactoryServerCommunication } from "../Utilities/server";
//import BooksDetails from "./BooksDetails";

const BooksContainer = () => {
  const [allBooks, setBooks] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filteredBooks, setfilteredBooks] = React.useState("all")

  React.useEffect(() => {
    fetchBooks();
    fetchCategory();
  }, []);

  const fetchBooks = () => {
    FactoryServerCommunication("/books", "GET")(setBooks);
  };

  const fetchCategory = () => {
    FactoryServerCommunication("/categories", "GET")(setCategories);
  };

  const listOfBtns = categories.map(({ id, name }) => {
    const color = ["btn btn-primary", "btn btn-secondary", "btn btn-success", "btn btn-info", "btn btn-light"][Math.floor(Math.random() * 5)]
    return (
      <button type="button" className={`${color}`}>
        {name}
      </button>
    );
  });
  

  const selectedBooks = allBooks.filter(({available}) => {
    console.log(available)
    if(filteredBooks === "all")return true    
    else if(filteredBooks === "available")return available
    return !available  
  })
  console.log(selectedBooks)

  const listOfBookCards = selectedBooks.map(
    (book) => {
      return (
        <NavLink to={`/books/${book.id}`} key={book.id} className="mt-3 col-md-3">
          <Card>
            <Card.Img src={book.image} />
            <Card.Body>
              <Card.Title>
                By: <span>{book.author}</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </NavLink>
      );
    }
  );

  return (
    <>
      <div className="row">
        <div className="col-md-8  my-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger" onClick={() => setfilteredBooks('available')}>
              Available
            </button>
            <button type="button" className="btn btn-warning" onClick={() => setfilteredBooks('borrowed')}>
              Borrowed
            </button>
              
          </div>
        </div>
      </div>
      <div className="row">{listOfBookCards}</div>
    </>
  );
};

export default BooksContainer;

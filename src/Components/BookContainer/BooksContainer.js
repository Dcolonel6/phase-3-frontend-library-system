import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { FactoryServerCommunication } from "../Utilities/server";
import AddBook from "./AddBook";
//import BooksDetails from "./BooksDetails";

const BooksContainer = () => {
  const [allBooks, setBooks] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [showModal, setshowModal] = React.useState(false);
  

  console.log(`filter status ${filterStatus}`);

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

  const selectedBooks = allBooks.filter(({ available }) => {
    
    if (filterStatus === "all") {
      return true;
    } else if (filterStatus === "available") {
      return available;
    }
    return !available;
  });
  const updateBooksStatus = (status, bookId) => {
    setBooks((currentBooks) => {
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, available: status } : book
      );
    });
  };
  const addBook = () =>{

  }
  const handleShowModal = (status) => {    
    setshowModal(status)
  };
  const handleSubmit = (evnt) => {
    evnt.preventDefault()
    const { target } = evnt
    target.reset()
    handleShowModal(false)    

  }

  const listOfBookCards = selectedBooks.map((book) => {
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
  });

  return (
    <>
      <div className="row">
        <div className="col-md-4  my-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setFilterStatus("available")}
            >
              Available
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => setFilterStatus("borrowed")}
            >
              Borrowed
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => setFilterStatus("all")}
            >
              All
            </button>
          </div>
        </div>
        <div className="col-md-4  my-3 ">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 d-inline"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />            
          </form>
        </div>
        <div className="col-md-4  my-3">
          <button type="button" className="btn btn-primary" onClick={() => handleShowModal(true)}>
            Add Book +
          </button>
          <AddBook handleShowModal ={handleShowModal} show={showModal} handleSubmit={handleSubmit}/>
        </div>
      </div>
      <div className="row">{listOfBookCards}</div>
    </>
  );
};

export default BooksContainer;

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

  const handleEditShowModal = (status) => {    
    setshowModal(status)
  };

  
  const addedBooks = (newBook) => {
    setBooks(currentBooks => {
      return [
        newBook,
        ...currentBooks
      ]
    })
  }

  const handleSubmit = (formData) => {    
    handleEditShowModal(false) 
    formData.available = true  
    formData.category_id = categories[Math.floor(Math.random()*categories.length)].id
    FactoryServerCommunication("/books", "POST",formData)(addedBooks)
  };  
  

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
         
        </div>
        <div className="col-md-4  my-3">
          <button type="button" className="btn btn-primary" onClick={() => handleEditShowModal(true)}>
            Add Book +
          </button>
          <AddBook handleShowModal ={handleEditShowModal} show={showModal} handleSubmit={handleSubmit}/>
        </div>
      </div>
      <div className="row">
        {listOfBookCards}  
      </div>
    </>
  );
};

export default BooksContainer;

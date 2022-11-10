import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditBook from "./EditBook";
import {FactoryServerCommunication} from '../Utilities/server';

const BooksDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = React.useState({});
  const [user, setUser] = React.useState(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    fetchBooks();
    setUser(sessionStorage.getItem("user"));
  }, []);
  

  const fetchBooks = () => {
    FactoryServerCommunication(`/books/${id}`,"GET")(setBook)
  };

  const deleteBook = (evnt) => {
    FactoryServerCommunication(`/books/${id}`,"DELETE")()
   navigate("/books/");
  };
  const editBook = (evnt) => {
		FactoryServerCommunication(`/books/${id}`, "PATCH")();
	};

  const handleShowModal = (status) => {    
    setShow(status)
  };
  const borrowBook = (evnt) => {
    //alert(user)
		FactoryServerCommunication(`/borrows`, "POST", {
			member_id: user.id,
			book_id: id,
			// given_by_id: sessionStorage.getItem("user")?.id,
			borrowed_on: new Date().toISOString().slice(0, 10),
			due_date: new Date().toISOString().slice(0, 10),
		})(() => {
			FactoryServerCommunication(`/books/${id}`, "PATCH", { available: 0 })();
			navigate("/books");
		});
	};
  

  return (
    <div className="row align-items-center my-3">
      <div className="col-md-6 offset-md-3 my-3 d-flex justify-content-end">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <EditBook show={show} updateModal = {handleShowModal} book={book}/>

          <button type="button" className="btn btn-danger" onClick={() => handleShowModal(!show)}>
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
					<h3 className="card-title">
						{book.title} &nbsp; by &nbsp; {book.author}
					</h3>
					<p className="card-text">{book.description}.</p>
					<button
						className={`btn ${
							book.available ? "btn-primary" : "btn-secondary"
						}`}
						disabled={!book.available}
						onClick={borrowBook}
					>
						Borrow
					</button>
				</div>
			</div>
    </div>
  );
};

export default BooksDetails;
